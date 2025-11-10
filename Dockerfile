# Etapa 1: Build
FROM node:18-alpine AS builder

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias primero (para cache de capas)
COPY package.json package-lock.json ./

# Instalar dependencias como usuario no-root
RUN chown -R nextjs:nodejs /app && \
    npm ci --only=production=false && \
    npm cache clean --force

# Copiar el resto de los archivos
COPY --chown=nextjs:nodejs . .

# Cambiar a usuario no-root
USER nextjs

# Construir la aplicación
RUN npm run build

# Etapa 2: Production
FROM nginx:alpine

# Instalar wget para healthcheck
RUN apk add --no-cache wget

# Copiar archivos compilados desde la etapa de build
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Limpiar cache de nginx
RUN rm -rf /var/cache/nginx/* && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chmod -R 755 /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Nginx ya viene configurado para ejecutarse de forma segura
# El usuario nginx es no-root por defecto en nginx:alpine
CMD ["nginx", "-g", "daemon off;"]


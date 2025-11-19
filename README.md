# Gestión de Usuarios - Micro Frontends Domina

Aplicación de usuarios con arquitectura de micro frontends. React + Vite + Module Federation .

## Stack

- React 18
- Vite
- Module Federation
- JSONPlaceholder API

## Instalación

```bash
git clone https://github.com/SPA19/domina-technical-challenge
cd tu-repo

# Instalar dependencias
cd user-mfe && npm install
cd ../host-app && npm install
```

## Ejecutar

**Primero el Micro Frontend:**

```bash
cd user-mfe
npm start (npm run build && npm run preview)
```

**Luego el Host:**

```bash
cd host-app
npm run dev
```

Abre: http://localhost:5000

## Estructura

```
user-mfe/          # Micro Frontend (puerto 5001)
  └── UserModule   # Componente exportado

host-app/          # Host (puerto 5000)
  └── App          # Carga el MFE dinámicamente
```

## Características

**Micro Frontend:**
- Se ejecuta independientemente
- Búsqueda y paginación de usuarios
- Estado propio

**Host:**
- Carga el MFE dinámicamente
- Panel de estadísticas
- Error Boundary (no se rompe si el MFE falla)

**Comunicación:**
- Host → MFE: Configuración
- MFE → Host: Eventos (usuario seleccionado, stats)

## Verificar

- **MFE solo:** http://localhost:5001
- **App completa:** http://localhost:5000
- **Error Boundary:** Detén el MFE, el host sigue funcionando

## Troubleshooting

**Error de React hooks:**
```bash
# Verificar misma versión en ambos package.json
"react": "18.3.1"
```

**Error al cargar MFE:**
```bash
cd user-mfe
npm run build && npm run preview
```

**No encuentra remoteEntry.js:**
```javascript
// Verificar en host-app/vite.config.js
remotes: {
  userMFE: 'http://localhost:5001/assets/remoteEntry.js'
}
```

## Arquitectura

- **Independencia:** Desarrollo y deploy separados
- **Carga dinámica:** Runtime, no build time
- **Resiliencia:** Error Boundary protege el host
- **Estado aislado:** Cada app maneja su estado

---

Prueba Técnica Domina - 2025 Simón Posada A
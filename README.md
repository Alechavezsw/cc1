# Flask Languages API

Una aplicación web simple usando Flask que proporciona un endpoint para obtener una lista de lenguajes de programación.

## Instalación

1. Instala las dependencias:
```bash
pip install -r requirements.txt
```

## Ejecución

```bash
python main.py
```

La aplicación estará disponible en `http://localhost:5000`

## Despliegue en Vercel

### Prerrequisitos
- Cuenta en [Vercel](https://vercel.com)
- Vercel CLI instalado: `npm i -g vercel`

### Pasos para desplegar

1. **Instala Vercel CLI** (si no lo tienes):
```bash
npm i -g vercel
```

2. **Inicia sesión en Vercel**:
```bash
vercel login
```

3. **Despliega el proyecto**:
```bash
vercel
```

4. **Para producción**:
```bash
vercel --prod
```

El proyecto se desplegará automáticamente y obtendrás una URL como: `https://tu-proyecto.vercel.app/languages`

### Alternativa: Despliegue desde GitHub

1. Sube tu código a GitHub
2. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente la configuración y desplegará tu proyecto

## Endpoints

### GET /languages

Retorna una lista JSON de lenguajes de programación.

**Ejemplo de respuesta:**
```json
[
  {"id": 1, "name": "Python"},
  {"id": 2, "name": "JavaScript"},
  {"id": 3, "name": "Java"},
  {"id": 4, "name": "C#"},
  {"id": 5, "name": "C++"}
]
```


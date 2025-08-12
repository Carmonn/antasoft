<script setup>
import ImgContenedor from '../components/ImgContenedor.vue';
</script>

# Diagrama entidad-realción

El sistema está basado en un diagrama entidad-relación que agrupa la información en secciones abstractas según su función y objetivo.
En el diagrama, cada sección está representada con un color distinto para facilitar su identificación.

<ImgContenedor
src="../assets/img/entidad-relacion/Completo.svg"
alt="Diagrama"
/>

Secciones principales

1. Usuarios
   - Maneja la lógica de roles y permisos.
   - Solo los usuarios pueden iniciar sesión en el sistema.

<ImgContenedor
src="../assets/img/entidad-relacion/Usuarios.svg"
alt="Diagrama"
/>

2. Personas
   - Contiene la lógica para contactar a personas reales.
   - Incluye datos personales y de contacto.

<ImgContenedor
src="../assets/img/entidad-relacion/Personas.svg"
alt="Diagrama"
/>

3. Sucursales
   - Identifica la sucursal, el cliente asociado y el tipo de clave que maneja.

<ImgContenedor
src="../assets/img/entidad-relacion/Sucursales.svg"
alt="Diagrama"
/>

4. Entidades y Municipios
   - Permite identificar geográficamente la ubicación de objetos o sucursales.

<ImgContenedor
src="../assets/img/entidad-relacion/Municipios.svg"
alt="Diagrama"
/>

5. Gestores
   - Relaciona qué zona geográfica atiende cada persona.
   - Importante: Los gestores no son usuarios del sistema; son personas en campo que pueden ser contactadas para realizar trabajos.

<ImgContenedor
src="../assets/img/entidad-relacion/Gestores.svg"
alt="Diagrama"
/>

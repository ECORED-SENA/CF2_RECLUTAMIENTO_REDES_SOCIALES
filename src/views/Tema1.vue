<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Hoja de vida 
    
    .row.mb-5
      .col-12.col-md-4.col-lg-4.mb-3(data-aos="fade-right")
        p En este tema se abordarán las características, tipos y estructura de una hoja de vida, con el objetivo de identificar, estudiar y analizar las competencias de cada uno de los candidatos de acuerdo con el perfil del cargo y las políticas de la organización. El aprendiz deberá leer detenidamente y analizar cada uno de estos temas para lograr entender cada una de sus estructuras, elementos y funciones.
      .col-12.col-md-4.col-lg-4.align-items-center.mb-4
        figure(data-aos="zoom-in-up")
          img.img350(src='@/assets/curso/tema1/t1-1.svg', alt='imagen 1-1')
      .col-12.col-md-4.col-lg-4.mb-3(data-aos="fade-left")
        p En primer lugar, es importante definir qué es una hoja de vida. Esta también es conocida como curriculum vitae, que en latín significa carrera de vida, es la carta de presentación del aspirante. Aquí se encuentra la presentación de las habilidades, estudios realizados y experiencia que cada persona tiene. En otras palabras, se utiliza como una herramienta para acceder a entrevistas de trabajo y que el empleador conozca un poco de la persona que se postula a la vacante. Por otra parte, es importante tener presente que también va a ser la primera impresión que se reflejará a los reclutadores y para hacer efectiva, deberá resaltar lo mejor.

    .cajon.color-acento-contenido.p-4.mb-5
      p Por otra parte, la hoja de vida se caracteriza por ser: fácil de leer, ser visualmente agradable, ser un documento confiable y no falso, tiene una estructura homogénea sobre el candidato, contiene una información completa del aspirante y responde a lo necesario para poder saber si se ajusta al perfil de la vacante. 

      p En relación con lo anterior, la hoja de vida sirve para que el empresario o la persona que hace la selección y analiza las características personales, y, por otra parte, permite resumir y presentar la trayectoria profesional del candidato. 
    
    .row.mb-5
      .col-1.d-none.d-lg-block.col-md-1.col-lg-1
        figure(data-aos="fade-right")
          img.img350(src='@/assets/componentes/puntos.svg', alt='imagen 1-1')
      .col-11-col-md-11.col-lg-11
        h3 Componentes y estructura de la hoja de vida 
        p La hoja de vida se divide en varios componentes, a continuación, se va a conocer cada uno de ellos:  

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in-up")
      .py-4.py-md-5.text-black(titulo="Datos personales").bgr_1.p-2
        .row.justify-center
          .col-md-6.mb-md-0.p-5
            h4 Datos personales
            p Aquí se escribe la información personal y datos de ubicación. Se puede incluir una fotografía para identificarse.
            p En esta sección debe ir el nombre completo, el documento de identidad, la dirección y ciudad de residencia, teléfono fijo y celular, correo electrónico y, si se tiene, la dirección de una página web donde se vean trabajos realizados.
            p A continuación, puedes ver un ejemplo de cómo hacer un encabezado o registro de datos personales en una hoja de vida:

          .col-md-6.bgr.p-5.position-relative
            img.clip(src='@/assets/curso/tema1/t1-2.svg', alt='imagen 1-2')
            h4.text-black Su nombre completo 
            p Número de Cedula: XXXXXXXXXXX
            p Fecha de nacimiento: Día, Mes, Año
            p Teléfono Móvil: Su número de contacto 
            p Dirección: Número - Calle o Avenida, Barrio 
            p Ciudad: Su ciudad de residencia 
            p Estado Civil: Soltero, Unión libre, Casado…
            p E-mail: nombre@web.com

            
      .py-4.py-md-5.text-black(titulo="Perfil profesional").bgr_1.p-2
        .row.justify-center
          .col-md-6.mb-md-0.p-5
            h4 Perfil profesional
            p Aquí, se describen de forma breve las habilidades, destrezas, especialidades, fortalezas y logros que se tienen sobre una ocupación. Por otra parte, se puede incluir también, campos de interés, enfoques que se tienen de la profesión y algunas características personales que lo destaquen. Este debe ser de un párrafo, entre 3 y 8 líneas, que resuma lo mencionado anteriormente.

            p A continuación, puedes ver un ejemplo de cómo hacer un perfil profesional en una hoja de vida:         
          .col-md-6.bgr.p-5.position-relative
            img.clip(src='@/assets/curso/tema1/t1-2.svg', alt='imagen 1-2')
            h3 Perfil profesional 
            p Me considero una persona responsable creativa, con iniciativa y puntualidad, asumo con agrado los retos y metas que su organización me pudiera plantear; con buen manejo de relaciones interpersonales, facilidad para trabajar en equipo en condiciones de alta presión.
      .py-4.py-md-5.text-black(titulo="Formación académica (Educación)").bgr_1.p-2
        .row.justify-center
          .col-md-6.mb-md-0.p-5
            h4 Formación académica (Educación)
            p En este espacio se coloca la formación académica, esta sección puede ir dividida en dos partes:
            p Formación académica: títulos de colegio, técnicos, pregrado, posgrado, entre otros.
            p Formación complementaria: seminarios, talleres, dominio de otros idiomas, entre otros.
            p Se puede escribir de la siguiente manera: institución educativa, título obtenido, ciudad y fecha finalizada. En caso de no haber terminado, el estado actual del estudio
            p A continuación, puedes ver un ejemplo de cómo redactar la formación académica en una hoja de vida:          
          .col-md-6.bgr.p-3.position-relative
            img.clip(src='@/assets/curso/tema1/t1-2.svg', alt='imagen 1-2') 
            .row.m-2
              .col-6
                h4 Posgrado Maestría:
              .col-6
                p.m-0 Ciencias Económicas
                p.m-0 Universidad de Pamplona 
                p.m-0 Pamplona, septiembre de 2020 
            .row.m-2    
              .col-6
                h4  Pregrado Universitario:
              .col-6
                p.m-0 Economía  
                p.m-0 Universidad de Pamplona
                p.m-0 Villa del Rosario, septiembre 2013.
            .row.m-2
              .col-6 
                h4 Especialización Tecnológica:  
              .col-6
                p.m-0 Diagnóstico y Análisis Organizacional para Unidades Productivas
                p.m-0 Servicio Nacional de Aprendizaje (SENA)
                p.m-0 San José de Cúcuta, junio 2016.
            .row.m-2
              .col-6 
                h4 Secundaria: 
              .col-6
                p.m-0 Bachiller Académico 
                p.m-0 Colegio Santos Apóstoles
                p.m-0 San José de Cúcuta, noviembre de 2007.

      .py-4.py-md-5.text-black(titulo="Experiencia laboral").bgr_1.p-2
        .row.justify-center
          .col-md-6.mb-md-0.p-5
            h4 Experiencia laboral
            p Aquí se debe explicar en qué lugares se ha trabajado, el cargo que se desempeñaba (la responsabilidad es opcional), el jefe inmediato y el tiempo de duración del trabajo. Es importante dejar un número de contacto y correo electrónico para que puedan verificar esos datos. 

            p A continuación, puedes ver un ejemplo de cómo redactar la formación académica en una hoja de vida:          
          .col-md-6.bgr.p-5.position-relative
            img.clip(src='@/assets/curso/tema1/t1-2.svg', alt='imagen 1-2')
            h3 Experiencia laboral 
            p Nombre de la empresa
            p Cargo: cargo que desempeñó
            p Funciones: funciones hechas en el cargo 
            p Fecha: fecha de inicio de labores - fecha final de labores 
            p Jefe inmediato: nombre del supervisor o jefe inmediato. 
            p Teléfono: teléfono de la empresa  
            p E-mail: correo electrónico de la empresa donde laboró 
            br
            p Servicio Nacional de Aprendizaje (SENA)
            p Cargo: Economista 
            p Funciones: Experto temático  
            p Fecha: Cúcuta, 01/06/2021 – 30/11/2021 
            p Jefe inmediato: Pepito Pérez - Coordinador de contenido temático. 
            p Teléfono: 3001111111  
            p E-mail: pepitoperez@sena.edu.co 


      .py-4.py-md-5.text-black(titulo="Referencias").bgr_1.p-2
        .row.justify-center
          .col-md-6.mb-md-0.p-5
            h4 Referencias
            p Aquí se deben incluir los datos de personas que puedan verificar la información que aparece en la hoja de vida y dar un buen concepto sobre el candidato. Se recomienda colocar al menos tres (3) referencias, indicando nombres y apellidos completos, ocupación y teléfono de contacto. Recuerden que estas referencias pueden ser de tipo personal y familiar. 

            p A continuación, puedes ver un ejemplo de cómo redactar o colocar la información de las referencias personales y familiares en una hoja de vida:          
          .col-md-6.bgr.p-5.position-relative
            img.clip(src='@/assets/curso/tema1/t1-2.svg', alt='imagen 1-2')
            h3 Referencias Personal o Familiar 
            p Nombre completo de la persona
            p Ocupación: a que se dedica la persona
            p Teléfono de contacto: teléfono de la persona  
            br
            p Pedro Antonio Fernández Martínez 
            p Instructor - Servicio Nacional de Aprendizaje SENA
            p Teléfono de contacto: 3002222222  

    
    h3 Tipos de Hojas de vida

    p.mb-5 Al momento de redactar o hacer una hoja de vida, se debe tener en cuenta el tipo de currículum, estos se diferencian en la forma en que esté organizada la información, aquí se encuentran tres de ellos:

    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center
              figure.justify-center
                img.img250(src='@/assets/curso/tema1/t1-3.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              h3.text-center El currículum cronológico
              p.text-center.mt-3 Este organiza la información de manera gradual, empezando por los logros y los puestos de trabajo más recientes y por último los más antiguos. Este tipo de currículo permite que el reclutador pueda conocer la evolución y trayectoria laboral del candidato. Es importante resaltar que este tipo de currículo no sirve para personas que se acaban de graduar, que no tienen experiencia laboral, que cuentan con largos periodos de inactividad laboral o que no tienen experiencia en el sector.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center
              figure.justify-center
                img.img250(src='@/assets/curso/tema1/t1-4.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              h3.text-center El currículum funcional o temático
              p.text-center.mt-5 Este tipo de currículo distribuye la información por temas; aquí se puede destacar las habilidades, competencias y logros conseguidos a lo largo de la carrera del candidato. Este tipo de currículo es recomendado para las personas que no tienen experiencia laboral, que quieren cambiar de sector profesional o que han estado mucho tiempo sin trabajar.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center
              figure.justify-center
                img.img250.p-2(src='@/assets/curso/tema1/t1-5.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              h3.text-center El currículum combinado o mixto
              p.text-center.mt-5 Es el currículum perfecto para toda clase de candidato, este permite plasmar la información laboral de acuerdo a las fortalezas del candidato. Por ejemplo, si el candidato tiene mucha experiencia podrá plasmarla de manera cronológica, y, por otra parte, si cuenta con otras series de habilidades, también podrá incluirlas en el currículo.

    p.mb-5 En lo que respecta a lo anterior, se encuentran diferentes formatos de hojas de vida ya establecidos que permiten recopilar un gran número de datos e información del candidato, entre las más conocidas se encuentran:    
  
    TabsB.color-acento-botones.mb-5(data-aos="zoom-in-up")
      .py-4.py-md-5.text-black(titulo="La Hoja de Vida Minerva 1003 azul").p-2
        .row.justify-center
          .col-md-6.mb-0.mb-md-0.p-3.p-md-5.p-lg-5
            h4 La Hoja de Vida Minerva 1003 azul
            p Este es un formato que es fácil de rellenar. Los campos son claros y puntuales respecto a la información que se debe ingresar. Este puede ser usado para cualquier sector de empleo. Para conocer y poder utilizar este formato, puede dar clic en el siguiente enlace donde encontrará el formato para poder diligenciar: 
            a.anexo.mb-lg-0(:href="obtenerLink('/downloads/form-hv-1003.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p Anexo. Hoja de vida minerva 1003 azul

          .col-md-6.align-items-center
            figure.justify-center
              img.img350(src='@/assets/curso/tema1/t1-7.svg', alt='imagen 1-6')

      .py-4.py-md-5.text-black(titulo="Formato único de hoja de vida").p-2
        .row.justify-center
          .col-md-6.mb-0.mb-md-0.p-3.p-md-5.p-lg-5
            h4 Formato único de hoja de vida
            p Es un documento técnico oficial del Estado Colombiano, este permite exponer de manera estandarizada datos acerca de las habilidades y competencias de una persona que pretende prestar servicios a entidades y organismos del sector público. Para conocer y poder utilizar este formato, puede dar clic en el siguiente enlace donde encontrará el formato para poder diligenciar:   
            a.anexo.mb-lg-0(:href="obtenerLink('/downloads/form-hv-persona-natural.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p Anexo. Hoja de vida persona natural

          .col-md-6.align-items-center
            figure.justify-center
              img.img350(src='@/assets/curso/tema1/t1-6.svg', alt='imagen 1-7')      
      .py-4.py-md-5.text-black(titulo="Hoja de vida libre").p-2
        .row.justify-center
          .col-md-6.mb-0.mb-md-0.p-3.p-md-5.p-lg-5
            h4 Hoja de vida libre
            p Es una hoja de vida que se realiza de manera creativa y permite adicionar información para mostrar las potencialidades de la persona. Para conocer y poder utilizar este formato, puede dar clic en el siguiente enlace donde encontrará el formato para poder diligenciar:   
            a.anexo.mb-lg-0(:href="obtenerLink('/downloads/hv-libre.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p Anexo. Hoja de vida libre 

          .col-md-6.align-items-center
            figure.justify-center
              img.img350(src='@/assets/curso/tema1/t1-8.svg', alt='imagen 1-8')

    p.mb-5 Por otra parte, es importante mencionar que a veces se cometen algunos errores al momento de hacer una hoja de vida y que se deben evitar, entre estos se encuentran los siguientes:

    PasosA.color-acento-botones.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0.align-items-center
          p No escribir el título <em>"Currículum Vitae"</em> en la parte superior, esta información es redundante y es mejor encabezar el formato con el nombre del candidato en un tamaño más grande y los datos personales.
        .col-md-6(data-aos="fade-left")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-9.svg', alt='img 1-9')
            
      .row
        .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-10.svg', alt='img 1-10')
        .col-md-6
          p Se debe incluir una dirección de correo electrónico profesional. A veces se colocan direcciones poco profesionales como: florecita_rokera69@hotmail.co; es mejor un correo más formal como: pedro.perez@hotmail.com.

      .row
        .col-md-6.mb-4.mb-md-0.align-items-center
          p La información debe ser de forma clara, organizada y sintética; demasiada explicación aburre a quien te tiene que contratar.
        .col-md-6(data-aos="fade-left")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-11.svg', alt='img 1-11') 

      .row
        .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-12.svg', alt='img 1-12')
        .col-md-6.align-items-center
          p Incluir documentación que no haya sido solicitada previamente por los reclutadores, como las referencias personales o el expediente académico. 
      
      .row
        .col-md-6.mb-4.mb-md-0.align-items-center
          p No escribir o hablar de remuneraciones, objetivos económicos o sueldos en el currículum. Después se darán los espacios para ese tema.
        .col-md-6(data-aos="fade-left")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-13.svg', alt='img 1-13')

      .row
        .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-14.svg', alt='img 1-14')
        .col-md-6.align-items-center
          p No explicar con tanto detalle las razones del desempleo o del fin de un contrato. Si su hoja de vida despierta algún interés en el reclutador, más adelante en una entrevista le preguntará.   

      .row
        .col-md-6.mb-4.mb-md-0.align-items-center
          p Usar palabras demasiado técnicas, pedantes o rebuscadas; es importante usar un vocabulario estándar sin caer en el lenguaje coloquial.
        .col-md-6(data-aos="fade-left")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-15.svg', alt='img 1-15')
            
      .row
        .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
          figure.justify-center
            img.img130(src='@/assets/curso/tema1/t1-16.svg', alt='img 1-16')
        .col-md-6.align-items-center
          p Usar fotografías inadecuadas o poco profesionales. Recuerden que la primera impresión es importante en un proceso de selección de personal.

      .row
        .col-md-6.mb-4.mb-md-0.align-items-center
          p Dejar demasiados espacios en blanco en tu currículum. 
        .col-md-6(data-aos="fade-left")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-17.svg', alt='img 1-17') 

      .row
        .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-18.svg', alt='img 1-18')
        .col-md-6.align-items-center
          p Indicar todos los seminarios o cursos a los que has asistido. El espacio de la hoja de vida es muy restringido, se debe seleccionar e indicar sólo los más significativos o que se relacionen con el cargo. 
      
      .row
        .col-md-6.mb-4.mb-md-0.align-items-center
          p Incluir tus <em>hobbies</em> y aficiones salvo que éstas tengan una relación muy directa con el puesto de trabajo.
        .col-md-6(data-aos="fade-left")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-19.svg', alt='img 1-19')

      .row
        .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
          figure.justify-center
            img.img160(src='@/assets/curso/tema1/t1-20.svg', alt='img 1-20')
        .col-md-6.align-items-center
          p Mentiras, medias verdades o exageraciones. Es importante "venderse" lo mejor posible, pero siempre con la verdad.        
      

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

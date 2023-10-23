const TitleSection = () => {
    const titleStyle = {
      width: '290px',
      // Otros estilos aquí
    };
    return (
    <div style={titleStyle}>
      <h1 className="text-black text-2xl font-semibold mb-4 text-center" >¡Ayúdanos a encontrar joyas ocultas alrededor del mundo!</h1>
      <p className="text-justify text-black text-sm">Completa el siguiente formulario con tus datos y breve información del tesoro a descubrir. ¡Sólo tomará unos minutos! Serás redireccionado a la sección de solicitudes.</p>
    </div>
    )
  }
  
  export default TitleSection;
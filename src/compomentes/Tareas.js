import React from "react";

function Tareas({texto}){
    return (
        <div className="tareas-contenedor">
            <div className="tarea-texto">
                {texto}
                
            </div>
            <div className="tarea-icono">
                Eliminar
            </div>
        </div>
    )
}
    
}

export default Tareas;
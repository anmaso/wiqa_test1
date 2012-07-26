M.operations = {
    "pesca.flow.tareas.lista" : {
      schema : {
				type : "object",
				additionalProperties : false,
				properties : {
					finalizadas : {  type : "boolean", optional : false}
				}
			}
    }
    ,"am.bo.comentario.list" : {
      schema : {
				type : "object",
				additionalProperties : false,
				properties : {
					finalizadas : {  type : "boolean", optional : true}
				}
			}
    }
    ,"am.bo.comentario.create" : {
      schema : {
				type : "object",
				additionalProperties : false,
				properties : {
					text : {  type : "string", optional : false},
					from : {  type : "string", optional : false},
					active : {  type : "boolean", optional : false},
					questionId : {  type : "number", optional : false},
					changeddate : {  type : "object", optional : false}
				}
			}
    }
    ,"am.bo.categoria.list" : {
      schema : {
				type : "object",
				additionalProperties : false,
				properties : {
					finalizadas : {  type : "boolean", optional : true}
				}
			}
    }
    ,"am.bo.pregunta.list" : {
      schema : {
				type : "object",
				additionalProperties : false,
				properties : {
					finalizadas : {  type : "boolean", optional : true}
				}
			}
    }
    ,"am.bo.pregunta.get" : {
      schema : {
				type : "object",
				additionalProperties : false,
				properties : {
					id : {  type : "number", optional : false}
				}
			}
    }
};

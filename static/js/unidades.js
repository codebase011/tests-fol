/*************************************************************************************************************************************************************************************************************
 * DEFINICION DE LAS UNIDADES DEL TEMARIO
 * Array de unidades con un campo "nombre" que contiene otro array con las preguntas, posibles Respuestas
 * y el num. de respuesta correcta.
 *************************************************************************************************************************************************************************************************************/

export const unidades = [
    /**********************************************************************************************************************************************************************************************************
     * UNIDAD 1
     **********************************************************************************************************************************************************************************************************/
    {
        //idUnidad: 1,
        titulo: "Los derechos del trabajo",
        preguntas: [
            {
                enunciado: "Señala cuáles de los siguientes derechos están considerados derechos fundamentales por la Constitución española de 1978:",
                posiblesRespuestas: [
                    "Derecho al trabajo y a un salario",
                    "Derecho a la huelga y a la libertad sindical",
                    "Derecho a la ocupación efectiva",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Indica cuál de las siguientes situaciones está excluida del derecho laboral:",
                posiblesRespuestas: [
                    "Una joven que trabaja en una compañia de seguros con un contrato mercantil y cobra comisión por cada póliza que realiza",
                    "Un empleado al servicio del hogar familiar.",
                    "Un auxiliar de farmacia",
                    "Una deportista profesional",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Los trabajos que realiza en la empresa familiar un hijo de 35 años que vive con la familia están excluidos del derecho del trabajo porque faltan las siguientes características: ",
                posiblesRespuestas: [
                    "Voluntariedad y dependencia.",
                    "Dependencia y ajenidad.",
                    "Retribución y voluntariedad.",
                    "Ajenidad y retribución.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "El principio de norma mínima significa que la norma de rango superior establece condiciones... ",
                posiblesRespuestas: [
                    "Derogables en perjuicio de las personas trabajadoras.",
                    "Inderogables en perjuicio de las personas trabajadoras.",
                    "Salariales, mejores que las de los convenios.",
                    "De jornada, peores que las de los convenios.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "¿Puede renunciar una persona trabajadora a los derechos reconocidos en su contrato de trabajo?",
                posiblesRespuestas: [
                    "Sí, pero a cambio de dinero.",
                    "Sí, cuando así lo disponga el convenio colectivo.",
                    "Sí, siempre que no sean derechos reconocidos por ley o por convenio colectivo.",
                    "No, por el principio de irrenunciabilidad de derechos.",
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "El derecho a la ocupación efectiva del puesto de trabajo significa que la empresa debe respetar...",
                posiblesRespuestas: [
                    "Las condiciones de horario pactadas.",
                    "Las funciones pactadas.",
                    "La jornada de trabajo.",
                    "Todas las respuestas anteriores son verdaderas.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Una empresa, que lleva abonando a sus empleados una ayuda para el transporte desde hace diez años no la puede suprimir unilateralmente, ya que iría contra el principio de...",
                posiblesRespuestas: [
                    "Norma mínima. ",
                    "Irrenunciabilidad de derechos. ",
                    "Condición más beneficiosa. ",
                    "Norma más favorable. ",
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "La normativa de la Unión Europea...",
                posiblesRespuestas: [
                    "Tiene un rango superior a la Constitución.",
                    "Tiene el mismo rango que la Constitución.",
                    "Tiene un rango inferior a la Constitución.",
                    "No se aplica en España.",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Las órdenes de la empresa según la jurisprudencia...",
                posiblesRespuestas: [
                    "Se presumen legítimas.",
                    "Nunca podrán desobedecerse.",
                    "Solamente podrán desobedecerse las que afectan a la vida privada.",
                    "Pueden desobedecerse antes de ser recurridas.",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Las personas trabajadoras pueden desobedecer las órdenes de la empresa...",
                posiblesRespuestas: [
                    "Si son peligrosas y suponen un grave riesgo para la salud.",
                    "Cuando sean ilegales.",
                    "Cuando afecten a su vida privada.",
                    "Las tres respuestas son verdaderas.",
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "Si las personas trabajadoras tienen un conflicto con su empresa deben resolverlo judicialmente en primer lugar en...",
                posiblesRespuestas: [
                    "El Tribunal Supremo.",
                    "La Audiencia Nacional.",
                    "El Juzgado de lo Social.",
                    "El Tribunal Superior de Justicia.",
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "El derecho a la libre circulación de personas trabajadoras en la Unión Europea permite...",
                posiblesRespuestas: [
                    "Circular libremente en la mitad de los Estados de la Unión Europea.",
                    "Circular libremente en todos los Estados de la Unión Europea.",
                    "Crear una empresa en solo dos Estados de la Unión Europea.",
                    "Todas las respuestas anteriores son verdaderas.",
                ],
                numRespuestaCorrecta: 2,
            },
        ],
    },

    /**********************************************************************************************************************************************************************************************************
     * UNIDAD 2
     **********************************************************************************************************************************************************************************************************/
    {
        titulo: "El contrato de trabajo y las modalidades de contratación",
        preguntas: [
            {
                enunciado: "Los menores de edad... ",
                posiblesRespuestas: [
                    "Pueden trabajar desde los 16 años con el consentimiento de sus progenitores o tutores.",
                    "Pueden trabajar desde los 17 años sin necesidad de consentimiento.",
                    "No pueden trabajar en ningún sector profesional, salvo en la hostelería.",
                    "Todas las afirmaciones anteriores son correctas. ",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Una persona física puede ser empresaria desde...",
                posiblesRespuestas: [
                    "Los 16 años.",
                    "Los 18 años.",
                    "Los 19 años, con consentimiento.",
                    "Todas las opciones son correctas.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Durante el periodo de prueba de un contrato, las empresas...",
                posiblesRespuestas: [
                    "Pueden rescindirlo avisando con quince días de antelación a los empleados y empleadas.",
                    "Pueden rescindirlo sin necesidad de alegar causa alguna.",
                    "No pueden extinguirlo, puesto que la persona trabajadora aún no está definitivamente incorporada a la empresa.",
                    "No pueden extinguirlo sin alegar una razón que justifique la medida.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "El periodo de prueba en un contrato en prácticas realizado a un técnico superior no puede...",
                posiblesRespuestas: [
                    "Exceder de quince días.",
                    "Exceder de un mes.",
                    "Exceder de dos meses.",
                    "No se puede pactar periodo de prueba.",
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "En el contrato de trabajo para la formación y el aprendizaje se cotiza para que la persona trabajadora tenga cubiertas...",
                posiblesRespuestas: [
                    "Todas las prestaciones de la Seguridad Social.",
                    "Solamente la prestación sanitaria,",
                    "La prestación sanitaria y la incapacidad por accidente.",
                    "Solamente la incapacidad temporal.",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "La duración máxima de un contrato por obra o servicio determinado será de...",
                posiblesRespuestas: [
                    "Dos años.",
                    "Tres años.",
                    "Tres años, ampliables seis meses más.",
                    "Cinco años."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "La duración máxima de un contrato eventual por circunstancias de la producción será de...",
                posiblesRespuestas: [
                    "Dos años.",
                    "No tiene duración máxima.",
                    "Seis meses dentro de un periodo de un año, ampliables por convenlo colectivo a un máximo de doce meses dentro de un periodo de 18.",
                    "Ocho meses dentro de un periodo de un año, ampliables por convenio colectivo a un máximo de doce meses dentro de un periodo de 18."
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "El contrato de interinidad, cuando se realiza para cubrir temporalmente un puesto durante un proceso de selección, tiene una duración máxima de...",
                posiblesRespuestas: [
                    "Un mes.",
                    "Dos meses.",
                    "Tres meses.",
                    "Cinco meses.",
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "Ala finalización de un contrato en prácticas, la empresa entregará a la persona trabajadora una certificación que acredite...",
                posiblesRespuestas: [
                    "Las tareas realizadas.",
                    "La duración del contrato.",
                    "El puesto ocupado.",
                    "Todos los elementos anteriores.",
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "Las personas trabajadoras a tiempo parcial...",
                posiblesRespuestas: [
                    "Pueden realizar horas extraordinarias.",
                    "No pueden realizar horas extraordinarias, salvo por fuerza mayor.",
                    "Solo pueden realizar horas extraordinarias si se pactan.",
                    "Solo pueden realizar cinco horas extraordinarias por mes.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Se puede pactar la realización de horas complementarias en contratos a tiempo parcial en los que la jornada de trabajo no sea inferior a...",
                posiblesRespuestas: [
                    "Diez horas. semanales en cómputo anual.",
                    "Quince horas semanales en cómputo anual.",
                    "Veinticinco horas semanales en cómputo anual.",
                    "Treinta horas semanales en cómputo anual.",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "La persona trabajadora contratada a tiempo parcial debe conocer el día y la hora de la realización de horas complementarias con un preaviso de...",
                posiblesRespuestas: [
                    "Tres días.",
                    "Cuatro días.",
                    "Cinco días.",
                    "Diez días.",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Las personas trabajadoras de las empresas de trabajo temporal recibirán por cada año trabajado, como indemnización por fin del contrato...",
                posiblesRespuestas: [
                    "Doce días de salario.",
                    "Quince días de salario.",
                    "Veinte días de salarlo.",
                    "Trelnta y tres días de salario,",
                ],
                numRespuestaCorrecta: 1,
            },
        ],
    },

    /**********************************************************************************************************************************************************************************************************
     * UNIDAD 3
     **********************************************************************************************************************************************************************************************************/
    {
        titulo: "La jornada y su retribución",
        preguntas: [
            {
                enunciado: "Indica cuál es el promedio de la jornada máxima semanal.",
                posiblesRespuestas: [
                    "Treinta y cinco horas.",
                    "Cuarenta horas en cómputo anual",
                    "Treinta horas.",
                    "Treinta y siete horas."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "La empresa puede distribuir la jornada laboral de forma irregular a lo largo del año en un porcentaje máximo del...",
                posiblesRespuestas: [
                    "10%",
                    "5%",
                    "15%",
                    "20%"
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Los registros de control del horario laboral se deben conservar durante...",
                posiblesRespuestas: [
                    "Cuatro años.",
                    "Dos años",
                    "Un mes",
                    "No es necesario conservarlos.",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "El importe de la reducción de salario para cuidar a un menor de doce años es...",
                posiblesRespuestas: [
                    "Del 50%",
                    "Proporcional a la reducción del trabajo.",
                    "No tiene reducción alguna.",
                    "Del 25%",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "La reducción de jornada por cuidado de un lactante para un progenitor que tiene un hijo o hija menor de nueve meses le corresponde...",
                posiblesRespuestas: [
                    "Al padre",
                    "A la madre",
                    "Es un derecho de ambos progenitores.",
                    "Este derecho está derogado.",
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "Las horas extraordinarias son voluntarias, salvo que...",
                posiblesRespuestas: [
                    "Se establezcan por convenio.",
                    "Sean por fuerza mayor",
                    "Se pacten por contrato.",
                    "Todas las respuestas anteriores son correctas.",
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "Si se compensan las horas extraordinarias con tiempo de descanso, ¿en qué periodo puede disfrutarlo la persona trabajadora?",
                posiblesRespuestas: [
                    "En los dos meses siguientes.",
                    "En los seis meses siguientes",
                    "En los cuatro meses siguientes",
                    "En los doce meses siguientes",
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "El descanso mínimo semanal para los mayores de edad es de...",
                posiblesRespuestas: [
                    "Dos días",
                    "Un día y medio.",
                    "Tres días.",
                    "Dos días hábiles.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Se considera persona trabajadora nocturna aquella que trabaje durante...",
                posiblesRespuestas: [
                    "Al menos, un tercio de la jornada anual en horario nocturno",
                    "Cuatro horas en horario nocturno.",
                    "Al menos, tres horas en jornada nocturna.",
                    "Las tres respuestas anteriores son verdaderas.",
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "Dentro de la jornada continuada, ¿cuándo se considera tiempo de trabajo la pausa para el bocadillo?",
                posiblesRespuestas: [
                    "Cuando así lo establezca el convenio o el contrato.",
                    "Nunca.",
                    "Solo para menores de 18 años.",
                    "Ninguna de las respuestas anteriores es verdadera.",
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Si las vacaciones coinciden con una incapacidad temporal por un accidente no laboral, la persona trabajadora..",
                posiblesRespuestas: [
                    "Pierde su derecho a vacaciones.",
                    "Podré disfrutarlas cuando finalice la incapacidad, siempre que no hayan transcurrido más de 18 meses desde el final del año en que se hayan originado.",
                    "Tiene que disfrutarlas dentro del año natural.",
                    "Podra disfrutarlas cuando finalice la incapacidad, si no han transcurrido mas de doce meses desde el final del año en que se hayan originado.",
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "El principio de igualdad de remuneración, sin discriminación por razón de sexo, obliga a la empresa...",
                posiblesRespuestas: [
                    "A pagar el mismo sueldo por la realización de un trabajo de igual valor.",
                    "A hacer el pago directa o indirectamente y cualquiera que sea su naturaleza, salarial o extrasalarial.",
                    "A llevar un registro con los valores medios de los salarios de la plantilla, desagregados por sexo y distribuidos por grupos profesionales.",
                    "Todas las respuestas son verdaderas.",
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "El salario en especie no puede superar:",
                posiblesRespuestas: [
                    "El 50% de las percepciones salariales.",
                    "El 25% de las percepciones salariales.",
                    "El 30% de las percepciones salariales.",
                    "El 15% de las percepciones salariales.",
                ],
                numRespuestaCorrecta: 3,
            },
        ],
    },
    /**********************************************************************************************************************************************************************************************************
     * UNIDAD 4
     **********************************************************************************************************************************************************************************************************/
    {
        titulo: "El recibo de salarios: la nómina",
        preguntas: [
            {
                enunciado: "Las percepciones extrasalariales...",
                posiblesRespuestas: [
                    "Nunca cotizan a la Seguridad Social",
                    "Algunas cotizan a la Seguridad Social, si sobrepasan un limite.",
                    "Nunca tributan en el IRPF.",
                    "No cotizan a la Seguridad Social y no tributan en el IRPF."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Los gastos de manutención durante los viajes de una persona trabajadora...",
                posiblesRespuestas: [
                    "Nunca cotizan a la Seguridad Social.",
                    "Cotiza la parte que supera el limite reglamentario.",
                    "Cotizan integramente a la Seguridad Social.",
                    "Cotiza la parte que no supera el límite reglamentario."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Indica qué conceptos no cotizan a la Seguridad Social:",
                posiblesRespuestas: [
                    "Las prendas de trabajo.",
                    "El desgaste de útiles y herramientas.",
                    "Las indemnizaciones por traslado.",
                    "El quebranto de moneda."
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "Esretribución en especie...",
                posiblesRespuestas: [
                    "La percepcion por prendas de trabajo.",
                    "El quebranto de moneda.",
                    "La utilización de automóvil de empresa.",
                    "El plus de transporte."
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "En el cálculo de la base por contingencias comunes no se incluyen...",
                posiblesRespuestas: [
                    "Las percepciones salariales.",
                    "La prorrata de las pagas extraordinarias.",
                    "Las horas extraordinarias.",
                    "Los productos en especies"
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "La base por contingencias profesionales...",
                posiblesRespuestas: [
                    "Es la misma que la base por contingencias comunes.",
                    "Es la base por contingencias comunes más las pagas extraordinarias.",
                    "Es la base por contingencias comunes más las horas extraordinarias.",
                    "Nunca es igual que la base por contingencias comunes."
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "Cuando la retribución es mensual, para el cálculo de la base de cotización, las pagas extraordinarias...",
                posiblesRespuestas: [
                    "Se prorratean entre doce meses.",
                    "Se prorratean entre 365 días.",
                    "Se prorratean entre el número de pagas.",
                    "No se prorratean."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "El tipo de cotización por desempleo...",
                posiblesRespuestas: [
                    "Es el mismo para todos los tipos de contrato.",
                    "Es mayor para los contratos de duración determinada.",
                    "Es el mismo que por contingencias comunes.",
                    "Es el mismo que para el Fogasa."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Si la base de cotización que se ha calculado es superior al máximo establecido para el grupo de cotización...",
                posiblesRespuestas: [
                    "Se cotiza por la base del grupo superior.",
                    "Se cotiza por la base máxima del grupo.",
                    "Se aplican tipos incrementados.",
                    "Se cotiza por la base calculada."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "La cotización al Fogasa le corresponde...",
                posiblesRespuestas: [
                    "Ala persona trabajadora.",
                    "A la empresa",
                    "A la persona trabajadora y a la empresa.",
                    "A ninguna de ellas."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Se exceptúan de gravamen y, por tanto, no se les practica retención a cuenta del IRPF, a ...",
                posiblesRespuestas: [
                    "Los incentivos.",
                    "Las prestaciones de la Seguridad Social.",
                    "Las percepciones extrasalariales.",
                    "Los gastos de locomoción justificados."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "¿El importe de la locomoción cotiza a la Seguridad Social?",
                posiblesRespuestas: [
                    "No, independientemente de su importe.",
                    "Cotiza el importe en su totalidad.",
                    "Cotiza solo cuando sobrepasa 0,19 €/km.",
                    "Cotiza solo la cuantía que sobrepasa de 0,19 €/km."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "¿Tributan en el IRPF las dietas de viaje?",
                posiblesRespuestas: [
                    "No, nunca.",
                    "Solamente cuando sobrepasan los límites.",
                    "Solo la cuantía que no sobrepasa los límites.",
                    "Solamente la cuantia que sobrepasa los límites."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "¿Los tiques restaurante tributan en el IRPF?",
                posiblesRespuestas: [
                    "Nunca, independientemente de su importe.",
                    "Por todo el importe que no sobrepasa los limites legales.",
                    "Solamente por la cuantia que sobrepasa los limites legales.",
                    "Tributan por todo el importe."
                ],
                numRespuestaCorrecta: 3,
            },
        ],
    },

    /**********************************************************************************************************************************************************************************************************
     * UNIDAD 5
     **********************************************************************************************************************************************************************************************************/
    {
        titulo: "Modificación, suspensión y extinción del contrato de trabajo",
        preguntas: [
            {
                enunciado: "Un empresario o empresaria puede realizar una movilidad funcional dentro del mismo grupo profesional..",
                posiblesRespuestas: [
                    "Solo si existe una causa técnica u organizativa.",
                    "Solo si existe una causa económica.",
                    "Sin necesidad de alegar causa alguna.",
                    "Solo si existe una causa productiva."
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "La movilidad funcional descendente fuera del grupo profesional puede hacerse...",
                posiblesRespuestas: [
                    "Solo durante quince días.",
                    "Solo durante un mes.",
                    "Solo mientras la persona trabajadora quiera.",
                    "Solo durante el tiempo imprescindible."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "La movilidad geográfica temporal tiene un límite máximo de...",
                posiblesRespuestas: [
                    "Tres meses en tres años.",
                    "Seis meses en tres años.",
                    "Nueve meses en tres años.",
                    "Doce meses en tres años."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "El listado que enumera las modificaciones sustanciales de las condiciones de trabajo en el Estatuto de los Trabajadores es...",
                posiblesRespuestas: [
                    "Un listado que no admite ninguna causa más.",
                    "Un listado cerrado en el que solo la Inspección de Trabajo y Seguridad Social puede incluir otras causas.",
                    "Un listado cerrado en el que solo los tribunales pueden incluir nuevas condiciones.",
                    "Un listado abierto."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "La indemnización a una persona trabajadora que extingue su contrato al sufrir una movilidad geográfica definitiva será de...",
                posiblesRespuestas: [
                    "Ocho días de salario por cada año de servicio.",
                    "Doce días de salario por cada año de servicio.",
                    "Quince días de salario por cada año de servicio.",
                    "Veinte días de salario por cada año de servicio."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "La suspensión de un contrato de trabajo genera una interrupción...",
                posiblesRespuestas: [
                    "Definitiva del contrato.",
                    "Temporal del contrato.",
                    "Solo de la obligación del trabajo.",
                    "Solo de la obligación del pago."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "La excedencia por cuidado de un familiar reserva el puesto de trabajo durante:",
                posiblesRespuestas: [
                    "Un año.",
                    "Dos años.",
                    "Tres años.",
                    "No reserva el puesto de trabajo."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Las empresas deben preavisar la extinción de los contratos de trabajo si estos han tenido una duración de...",
                posiblesRespuestas: [
                    "Un año",
                    "Más de un año.",
                    "Dos años.",
                    "Tres años."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "El plazo para impugnar un despido con el que no se está de acuerdo es de...",
                posiblesRespuestas: [
                    "Quince días hábiles.",
                    "Veinte días hábiles.",
                    "Veinte días naturales.",
                    "No hay ningún plazo."
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "Si un empleado o empleada falta a su trabajo, puede ser despedido mediante despido disciplinario siempre que las faltas...",
                posiblesRespuestas: [
                    "Sean repetidas.",
                    "Sean repetidas y estén injustificadas.",
                    "Puede despedirle con una sola falta injustificada.",
                    "Todas las respuestas son verdaderas."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Si una persona es despedida porque ejerce su derecho a una reducción de jornada para el cuidado de su hijo o hija menor de doce años, el despido será considerado...",
                posiblesRespuestas: [
                    "Nulo.",
                    "Procedente.",
                    "Improcedente.",
                    "Procedente revisable."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "La falta de adaptación de una persona trabajadora a las modificaciones introducidas en su puesto de trabajo es causa de...",
                posiblesRespuestas: [
                    "Despido disciplinario.",
                    "Despido por causas objetivas.",
                    "Despido colectivo.",
                    "No es causa de despido."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Simular una enfermedad puede ser causa de...",
                posiblesRespuestas: [
                    "Despido disciplinario, al tratarse de una transgresión de la buena fe",
                    "Despido por causas objetivas.",
                    "No es causa de despido ni sanción.",
                    "Solo puede ser sancionado con una amonestación."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "La extinción de un contrato por falta de adaptación a las modificaciones técnicas introducidas en el pues-to puede fundamentar un despido...",
                posiblesRespuestas: [
                    "Disciplinario.",
                    "Colectivo.",
                    "Objetivo.",
                    "Ninguna de las anteriores."
                ],
                numRespuestaCorrecta: 3,
            },
        ],
    },

    /**********************************************************************************************************************************************************************************************************
     * UNIDAD 6
     **********************************************************************************************************************************************************************************************************/
    {
        titulo: "El sistema de la Seguridad Social",
        preguntas: [
            {
                enunciado: "¿Cuál de estas personas trabajadoras se encuadra dentro del régimen general de la Seguridad Social?",
                posiblesRespuestas: [
                    "Azucena, que cursa un ciclo formativo de Administración y Finanzas.",
                    "Vicenta, que trabaja en un barco pesquero.",
                    "Un informático que trabaja como como autónomo.",
                    "Un técnico de laboratorio que trabaja en una clínica."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "La afiliacion de la persona trabajadora la solicita...",
                posiblesRespuestas: [
                    "La propia persona trabajadora.",
                    "La empresa.",
                    "El INSS",
                    "El SEPE"
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Indica qué prestaciones de la Seguridad Sociedad incluye la modalidad no contributiva.",
                posiblesRespuestas: [
                    "La asistencia sanitaria",
                    "La incapacidad permanente.",
                    "La jubilación.",
                    "Todas las anteriores."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "¿Qué organismo gestiona la prestación por desempleo?",
                posiblesRespuestas: [
                    "La Tesorería General de la Seguridad Social.",
                    "El Servicio Público de Empleo Estatal (SEPE)",
                    "El Instítuto Nacional de la Seguridad Social (INSS).",
                    "Ninguno de ellos."
                ],
                numRespuestaCorrecta: 2,
            },
            {
                enunciado: "Desde el 1 de enero de 2021, la duración de la presta- ción por nacimiento y cuidado de menor, para ambos progenitores asciende a...",
                posiblesRespuestas: [
                    "Dieciséis semanas.",
                    "Catorce semanas.",
                    "Doce semanas.",
                    "Diez semanas."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "La cuantía de la prestación por nacimiento y cuidado de menor equivale a...",
                posiblesRespuestas: [
                    "El 100% de la base reguladora.",
                    "El 75% de la base reguladora.",
                    "El 70% de la base reguladora.",
                    "El 80% de la base reguladora."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Indica cuántas semanas puede anticipar la madre biológica en el inicio de la prestación por nacimiento y cuidado de menor a la fecha probable del parto.",
                posiblesRespuestas: [
                    "Dos.",
                    "Tres.",
                    "Cuatro.",
                    "Cinco."
                ],
                numRespuestaCorrecta: 3,
            },
            {
                enunciado: "En una incapacidad temporal derivada de una enfermedad común, el subsidio durante los tres primeros días es de...",
                posiblesRespuestas: [
                    "No hay subsidio los tres primeros días.",
                    "El 50% de la base reguladora.",
                    "El 60% de la base reguladora.",
                    "El 75% de la base reguladora."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "La incapacidad permanente total inhabilita a la per- sona trabajadora para...",
                posiblesRespuestas: [
                    "Realizar tareas de su profesión; no obstante, puede dedicarse a otras distintas.",
                    "Realizar tareas de cualquier profesion.",
                    "Cualquier actividad en su vida profesional o personal.",
                    "Todas las afirmaciones anteriores son incorrectas."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Para poder acceder a la pensión de jubilación es necesario...",
                posiblesRespuestas: [
                    "Tener la edad de jubilación correspondiente en cada momento.",
                    "Haber cotizado durante quince años como minimo.",
                    "Dos años deben estar incluidos dentro de los últimos cotizados, previos a la edad de jubilación.",
                    "Todas las respuestas son verdaderas."
                ],
                numRespuestaCorrecta: 4,
            },
            {
                enunciado: "Las prestaciones por desempleo...",
                posiblesRespuestas: [
                    "Están sujetas a tributación en el impuesto sobre la renta de las personas físicas.",
                    "No estan sujetas a ninguna tributación.",
                    "Solamente esta sujeta a tributacion la parte que excede del SMI.",
                    "Están sujetas a tributación en función del número de hijos o hijas."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "El subsidio por desempleo de nivel asistencial se concede a quienes, en situación de paro, carecen de ren- tas superiores, en computo mensual, a...",
                posiblesRespuestas: [
                    "El 75% del SMI.",
                    "El 80% del IPREM.",
                    "El 80% del SMI.",
                    "El 100% del IPREM."
                ],
                numRespuestaCorrecta: 1,
            },
            {
                enunciado: "Tienen derecho a la pensión de orfandad...",
                posiblesRespuestas: [
                    "Las personas menores de 21 años.",
                    "Las personas menores de 25 años que no realicen ninguna actividad, siempre que sus ingresos resulten inferiores al SMI en cómputo anual.",
                    "Los hijos o hijas incapacitados para trabajar.",
                    "Todas las opciones son correctas."
                ],
                numRespuestaCorrecta: 4,
            },
        ],
    },
    /**********************************************************************************************************************************************************************************************************
     * UNIDAD 7
     **********************************************************************************************************************************************************************************************************/
    {
        titulo: "El sistema de la Seguridad Social",
        preguntas: [
            {
                enunciado: "¿Cuál de estas personas trabajadoras se encuadra dentro del régimen general de la Seguridad Social?",
                posiblesRespuestas: [
                    "Azucena, que cursa un ciclo formativo de Administración y Finanzas.",
                    "Vicenta, que trabaja en un barco pesquero.",
                    "Un informático que trabaja como como autónomo.",
                    "Un técnico de laboratorio que trabaja en una clínica."
                ],
                numRespuestaCorrecta: 4,
            },
            
        ],
    }
];
import type { Question } from '../types/question'

export const questions = [
  {
    id: 'arrendatario_domicilio',
    label: 'Dirección completa de la vivienda que se desea alquilar:',
    type: 'text',
    placeholder: 'Ej. Av Javier Prado ... ',
  },
  {
    id: 'metros_cuadrados',
    label: 'Número de metros cuadrados construidos que dispone la vivienda:',
    type: 'number',
    placeholder: 'Escribe un numero',
  },
  {
    id: 'caracteristicas_vivienda',
    label:
      'Describa las partes,dependencias o espacios que forman la vivienda:',
    type: 'textarea',
    placeholder: 'Ej. 3 habitaciones, 2 baños, cocina...',
  },
  {
    id: 'referencia_catastral',
    label: 'Introduzca la Referencia Catastral de la vivienda:',
    type: 'text',
    placeholder: 'Ej. 458935415SC458J0002PB',
  },
  {
    id: 'ciudad',
    label:
      'Localidad en la que se firma este contrato de arrendamiento de vivienda habitual:',
    type: 'text',
    placeholder: 'Ej. Lima',
  },
  {
    id: 'fecha',
    label:
      'Fecha en la que se firma este contrato de arrendamiento de vivienda habitual:',
    type: 'date',
    placeholder: 'Ej. 10 de marzo de 2026',
  },
  {
    id: 'arrendador_nombre',
    label: 'Nombre completo del primer o único arrendador:',
    type: 'text',
    placeholder: 'Ej. Ana Mariá López Martinez',
  },
  {
    id: 'arrendador_dni',
    label: 'DNI/NIF del arrendador',
    type: 'select',
    options: [
      { label: 'DNI/NIF', value: 'DNI/NIF' },
      { label: 'NIE', value: 'NIE' },
      { label: 'Pasaporte', value: 'Pasaporte' },
    ],

    placeholder: 'DNI/NIF',
  },
  {
    id: 'arrendador_dni_number',
    label:
      'Número del documento personal de identificación del primer o único arrendador:',
    type: 'number',
    placeholder: 'Ej. 753747388',
  },
  {
    id: 'arrendador_domicilio',
    label: 'Dirección completa del primer o único arrendador:',
    type: 'text',
    placeholder: 'Ej. Av Javier Prado..',
  },

  {
    id: 'arrendatario_nombre',
    label: 'Nombre completo del primer o único arrendatario:',
    type: 'text',
    placeholder: 'Ej. Ana Mariá López Martinez',
  },
  {
    id: 'arrendatario_dni',
    label:
      'Seleccione el tipo de documento de identificación personal del primer o único arrendatario:',
    type: 'select',
    options: [
      { label: 'DNI/NIF', value: 'DNI/NIF' },
      { label: 'NIE', value: 'NIE' },
      { label: 'Pasaporte', value: 'Pasaporte' },
    ],
    placeholder: 'DNI/NIF',
  },
  {
    id: 'arrendatario_dni_number',
    label:
      'Número del documento personal de identificación del primer o único arrendatario:',
    type: 'number',
    placeholder: 'Ej. 753747388',
  },
] as const satisfies readonly Question[]

import { SweetAlertIcon } from 'sweetalert2';

export class Message {
  static CAMBIOCLAVEDIGITAL = 'Cambio de Clave Digital'
  static MENSAJETEN =
  'Al finalizar este proceso, tu usuario creado ya podrá activar su cuenta a través de la app de Banbif.';
static TOKENDIGITAL = 'Se le asignará un Token digital';
static DESCRIPTIONPROFILE =
    'Si seleccionas ambos perfiles, podrás realizar operaciones y firmarlas.';
  static CANCEL = 'Cancelar';
  static ERROR: SweetAlertIcon = 'error';
  static WARNING: SweetAlertIcon = 'warning';
  static ERRORID = 'Error con id del registro';
  static YOUMOSTSELECT = 'Debe seleccionar al menos una cuenta bancaria';
  static DATAISMISSING = 'Faltan datos por agregar';
  static INVALIDDNI = 'Campo documento invalido o vacio';
  static DOCUMENTNUM = 'El documento debe ser un valor numérico';
  static TELEPHONENUM = 'El teléfono solo debe tener valores numéricos';
  static SHOULDADDEMAIL = 'Debe agregar un email';
  static EMAILMIN = 'El email debe tener al menos cinco carácteres';
  static EMAILMAX = 'El email debe tener máximo cincuenta carácteres';
  static INCORRECTEMAIL = 'El email es incorrecto';
  static CONFIRMBTN: 'btn btn-success';
  static CANCELBTN: 'btn btn-danger ms-2';
  static MESSAGEPASWORDSUCCESS = "Clave Digital cambiada correctamente"
  static MESSAGECHANGEPASWORDSUCCESS = "Contraseña cambiada correctamente"
  static USERDETAIL = "Detalle del usuario"
  static MESSAGESENDEMAIL = 'Un email llegará a tu correo confirmando el cambio';
}

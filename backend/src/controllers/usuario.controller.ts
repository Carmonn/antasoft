import { Usuario } from "../models/index.js";
import bcrypt from "bcrypt";
import {
  createHttpException,
  ErrorHelpCode,
  errorHelpMap,
} from "../middlewares/http-exception.js";
import { Rol } from "../models/index.js";

export class UsuarioController {
  static async hashearPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const contra = await bcrypt.hash(password, salt);
    console.log("Contraseña hasheada:", contra);
  }

  static async verificarCorreoPassword(correo: string, password: string) {
    // Buscar el usuario por correo
    const usuario = await Usuario.findOne({
      where: { correo },
      include: [{ model: Rol, as: "rol" }],
    });

    // Verificar si el usuario existe
    if (!usuario) {
      throw createHttpException(
        404,
        "Usuario no encontrado",
        errorHelpMap[ErrorHelpCode.LOGIN_CORREO_NO_ENCONTRADO],
      );
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) {
      throw createHttpException(
        401,
        "Contraseña incorrecta",
        errorHelpMap[ErrorHelpCode.LOGIN_PASSWORD_INCORRECTO],
      );
    }

    // Si la verificación es exitosa, devolver el usuario sin la contraseña
    const usuarioObj = usuario.toJSON();
    delete usuarioObj.password;

    return usuarioObj;
  }
}

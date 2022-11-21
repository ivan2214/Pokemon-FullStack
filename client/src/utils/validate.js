export default function validate(input) {
  let errors = {};
  let { name, hp, attack, defense, speed, types } = input;

  if (!name || name.length <= 3) {
    errors.name = "Debe tener un nombre de mas de tres letras";
  }
  if (!hp || hp <= 0 || hp >= 1500) {
    errors.hp = "Debe tener hp entre 1 - 1500";
  }
  if (!attack || attack <= 0 || attack >= 2000) {
    errors.attack = "Debe tener attack entre 1 - 2000";
  }
  if (!defense || defense <= 0 || defense >= 1000) {
    errors.defense = "Debe tener defense entre 1 - 1000";
  }
  if (!speed || speed <= 0 || speed >= 1500) {
    errors.speed = "Debe tener speed hp entre 1 - 1500";
  }

  if (!types.length) {
    errors.types = "Debe ser de algun tipo ";
  }

  if (types.length > 2) {
    errors.types = "Debe ser de algun tipo y menor a 2";
  }

  return errors;
}

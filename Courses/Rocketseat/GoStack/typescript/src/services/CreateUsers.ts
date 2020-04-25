// interface created to type variables
// string, number, boolean, object, array

interface techObject {
  title: string,
  experience: number,
}

interface CreateUserData {
  name?: string,
  age: number,
  trueOrFalse: boolean,
  techs: Array<string | techObject | object>,
  vector?: object[],
}

export default function createUser({ name, age, trueOrFalse }: CreateUserData) {
  const person = {
    name,
    age,
    trueOrFalse,
  }

  return person;
}
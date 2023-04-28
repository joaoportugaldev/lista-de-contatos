class Contact {
  name: string
  tel: string
  email: string
  id: number

  constructor(name: string, tel: string, email: string, id: number) {
    this.name = name
    this.tel = tel
    this.email = email
    this.id = id
  }
}

export default Contact

export const joao = new Contact(
  'João Portugal',
  '21989434454',
  'joaosportugal@hotmail.com',
  1
)
export const pedro = new Contact(
  'Pedro Menescal',
  '71988874729',
  'castelobranco@gmail.com',
  2
)
export const bruno = new Contact(
  'Bruno Reis',
  '61787878787',
  'brunoreis@outlook.com',
  3
)

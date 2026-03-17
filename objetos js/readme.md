# Programación Orientada a Objetos (POO)
La POO es una forma de programar donde usamos clases para crear objetos.

La idea es organizar el código como si fueran cosas del mundo real.

## 1️ Clase

Una clase es como un molde o plantilla.

Sirve para crear objetos.

Ejemplo:
Si la clase es Mascota, los objetos pueden ser Firulais, Luna, Toby, etc.

class Mascota {

 constructor(nombre, especie){
  this.nombre = nombre
  this.especie = especie
 }

}
## 2️ Constructor

El constructor es una función que se ejecuta cuando creamos el objeto.

Sirve para guardar los datos.

constructor(nombre, especie)

Aquí guardamos:

nombre

especie

## 3️ this

this significa este objeto.

Sirve para decir que el dato pertenece al objeto que estamos creando.

this.nombre = nombre

Significa:

guardar el nombre dentro del objeto.

## 4️ Crear objetos (new)

Para crear un objeto usamos new.

const perro1 = new Mascota("Firulais","Perro")

Aquí:

Mascota → clase

perro1 → objeto creado

## 5️ Métodos

Los métodos son funciones dentro de la clase.

Sirven para que el objeto haga algo.

describir(){
 return `${this.nombre} es un ${this.especie}`
}

Uso:

perro1.describir()
## 6️ Herencia

La herencia permite crear una clase nueva basada en otra.

Así no repetimos código.

class Perro extends Mascota{

 constructor(nombre, raza){
  super(nombre,"Perro")
  this.raza = raza
 }

}
## 7️ super()

super() llama al constructor de la clase padre.

super(nombre,"Perro")

Esto usa la información de la clase Mascota.
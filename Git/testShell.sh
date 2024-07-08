#!/bin/bash

# Se ejecuta con ./nameFile.ext

echo "Hola Mundo!";
echo "vamos a aprender a usar comandos con bash"; echo "en marcha!...";
# Hoja de trucos para crear scripts en Bash
# https://devhints.io/bash

num=7;
string="siete";

echo "Llamar variables definidas, número $num y string $string";
bool="true";
echo "Esta es otra forma de llamar variables => ${bool}";
echo "La variable ha sido modificada a ${string/siete/ocho}";
length=3;
echo "Devolver los primeros 3 caracteres de una variable => ${string:0:length}";
echo "Devolver los dos últimos caracteres de una variable => ${string: -2}";
echo "Devolver el tamaño de una variable => ${#string}";
echo "Estamos ubicados en =>" $(pwd);

# echo "What's your name?"; # Entrada de datos
# read name;
# echo "Hola, $name!";

# Hoja de referencia de grep de GNU
# https://devhints.io/grep
# Hoja de trucos de comandos Unix
# https://cheatography.com/jluis/cheat-sheets/bash-and-unix-commands/
# Hoja de trucos de Vim
# https://vim.rtorr.com/

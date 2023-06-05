-- MySQL Script generated by MySQL Workbench
-- Sat May  6 23:34:41 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id_usuario` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `id_cliente` bigint NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint NOT NULL,
  `dni` varchar(15) NOT NULL,
  `nombre_empresa` varchar(150) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `Cliente_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario` (`id_usuario`) ON DELETE CASCADE
) ;

-- -----------------------------------------------------
-- Table `mydb`.`administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrador` (
  `id_administrador` bigint NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint NOT NULL,
  PRIMARY KEY (`id_administrador`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
) ;

-- -----------------------------------------------------
-- Table `mydb`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carrito` (
  `id_carrito` bigint NOT NULL AUTO_INCREMENT,
  `id_cliente` bigint NOT NULL,
  `cantidad` int NOT NULL,
  `monto` float NOT NULL,
  `medio_pago` varchar(100) NOT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`) ON DELETE CASCADE
) ;


-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `id_categoria` INT NOT NULL,
  `nombre_categoria` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`bebidas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`bebidas` (
  `id_bebidas` bigint NOT NULL AUTO_INCREMENT,
  `marca` varchar(250) NOT NULL,
  `stock` int NOT NULL,
  `precio` float NOT NULL,
  `categoria` varchar(250) NOT NULL,
  PRIMARY KEY (`id_bebidas`)
) ;

CREATE TABLE `carrito_bebidas` (
  `id_carrito` bigint NOT NULL,
  `id_bebidas` bigint NOT NULL,
  KEY `id_carrito` (`id_carrito`),
  KEY `id_bebidas` (`id_bebidas`),
  CONSTRAINT `carrito_bebidas_ibfk_1` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`) ON DELETE CASCADE,
  CONSTRAINT `carrito_bebidas_ibfk_2` FOREIGN KEY (`id_bebidas`) REFERENCES `bebida` (`id_bebidas`) ON DELETE CASCADE
) ;

-- -----------------------------------------------------
-- Table `mydb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedido` (
`id_pedido` bigint NOT NULL AUTO_INCREMENT,
  `id_carrito` bigint NOT NULL,
  `nro_factura` varchar(250) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `id_carrito` (`id_carrito`),
  CONSTRAINT `Pedido_ibfk_1` FOREIGN KEY (`id_carrito`) REFERENCES `Carrito` (`id_carrito`) ON DELETE CASCADE
) ;

ALTER TABLE `carrito`
ADD INDEX `FK_carrito_cliente` (`id_cliente`);

ALTER TABLE `pedido`
ADD INDEX `FK_pedido_carrito` (`id_carrito`);

ALTER TABLE `administrador`
ADD INDEX `FK_administrador_usuario` (`id_usuario`);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

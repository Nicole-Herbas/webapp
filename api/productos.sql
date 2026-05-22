CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `productos` VALUES (1,'Smartphone Galaxy X12',699.00,'Teléfono inteligente con pantalla AMOLED de 6.5”, 128 GB de almacenamiento y cámara de 50 MP.'),(2,'Laptop ProBook 15',1100.00,'Computadora portátil con procesador Intel i7, 16 GB de RAM y SSD de 512 GB.'),(3,'Audífonos NoiseFree',149.00,'Audífonos inalámbricos con cancelación de ruido y hasta 30 horas de batería.'),(4,'Smartwatch FitTime',199.00,'Reloj inteligente con monitoreo de ritmo cardíaco, GPS y resistencia al agua.'),(5,'Tablet VisionTab 10',349.00,'Tablet de 10 pulgadas con pantalla Full HD, 64 GB de almacenamiento y batería de larga duración.'),(6,'Cámara Digital UltraShot',549.00,'Cámara digital con resolución de 24 MP, grabación en 4K y zoom óptico de 10x.');

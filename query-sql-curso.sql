. --
2. -- Create schema bd_devmedia
3. --
4.
5. CREATE DATABASE IF NOT EXISTS bd_devmedia;
6. USE bd_devmedia;
7.
8. --
9. -- Definition of table `cliente`
10. --
11.
12. DROP TABLE IF EXISTS `cliente`;
13. CREATE TABLE `cliente` (
14.   `idCliente` int(11) NOT NULL AUTO_INCREMENT,
15.   `Nome` varchar(100) NOT NULL,
16.   `Sexo` char(1) DEFAULT 'M',
17.   `DataNascimento` date DEFAULT NULL,
18.   `Peso` double DEFAULT NULL,
19.   PRIMARY KEY (`idCliente`),
20.   KEY `Index_Sexo_Peso` (`Sexo`,`DataNascimento`)
21. ) ENGINE=InnoDB AUTO_INCREMENT=27
        DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
22.
23. --
24. -- Dumping data for table `cliente`
25. --
26.
27. /*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
28. INSERT INTO `cliente` (`idCliente`,`Nome`,`Sexo`,
     `DataNascimento`,`Peso`) VALUES
29.  (24,'Fernando','M','2000-06-30',86.4),
30.  (25,'Daniella','F','1995-01-04',60.3),
31.  (26,'Lia','F','1989-03-27',59.1);
32. /*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
33.
34. --
35. -- Definition of table `telefonecliente`
36. --
37.
38. DROP TABLE IF EXISTS `telefonecliente`;
39. CREATE TABLE `telefonecliente` (
40.   `idtelefonecliente` int(11) NOT NULL AUTO_INCREMENT,
41.   `ddd` varchar(3) NOT NULL,
42.   `numero` varchar(10) NOT NULL,
43.   `idcliente` int(11) NOT NULL,
44.   PRIMARY KEY (`idtelefonecliente`),
45.   KEY `FK_Cliente_idx` (`idcliente`),
46.   CONSTRAINT `FK_Cliente` FOREIGN KEY (`idcliente`)
        REFERENCES `cliente` (`idCliente`) ON
47. DELETE NO ACTION ON UPDATE NO ACTION
48. ) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT
        CHARSET=utf8 COMMENT='                     ';
49.
50. --
51. -- Dumping data for table `telefonecliente`
52. --
53.
54. /*!40000 ALTER TABLE `telefonecliente` DISABLE KEYS */;
55. INSERT INTO `telefonecliente` (`idtelefonecliente`,`ddd`,
      `numero`,`idcliente`) VALUES
56.  (49,'021','78789898',24),
57.  (50,'021','34212121',24),
58.  (51,'021','36353635',25),
59.  (52,'021','37373636',26);
60. /*!40000 ALTER TABLE `telefonecliente` ENABLE KEYS */;

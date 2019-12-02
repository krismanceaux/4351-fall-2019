-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: admin_portal
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `roleID` int(11) DEFAULT '27',
  `userName` varchar(45) DEFAULT 'null',
  `password` varchar(45) NOT NULL DEFAULT 'password',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `person_ibfk_1` (`roleID`),
  CONSTRAINT `person_ibfk_1` FOREIGN KEY (`roleID`) REFERENCES `roleName` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'Rob','Michaels',1,'rmike','password'),(21,'Ricardo','Useche',4,'riuseche','password'),(22,'Mark','Alan',2,'malan','password'),(23,'Roger','North',20,'rnorth','password'),(24,'Anna','Stone',2,'astone','password'),(38,'John','Doe',27,'doeman777','123456');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roleLink`
--

DROP TABLE IF EXISTS `roleLink`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roleLink` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleID` int(11) NOT NULL,
  `roleLink` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `actualLink` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `roleLink_ibfk_1` (`roleID`),
  CONSTRAINT `roleLink_ibfk_1` FOREIGN KEY (`roleID`) REFERENCES `roleName` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roleLink`
--

LOCK TABLES `roleLink` WRITE;
/*!40000 ALTER TABLE `roleLink` DISABLE KEYS */;
INSERT INTO `roleLink` VALUES (1,3,'Finance Reports','Finance',NULL),(2,5,'Sales Reports','Sales',NULL),(3,2,'Application Monitoring','Engineering',NULL),(4,3,'Accounts Payable','Finance',NULL),(5,3,'Accounts Receivables','Finance',NULL),(6,3,'Tax','Finance',NULL),(7,2,'Tech Support','Engineering',NULL),(8,2,'App Development','Engineering',NULL),(9,2,'App Admin','Engineering',NULL),(10,2,'Release Management','Engineering',NULL),(11,5,'Sales Leads','Sales',NULL),(12,5,'Sales Demo','Sales',NULL),(13,4,'New Hire','Human Resources',NULL),(14,4,'On-boarding','Human Resources',NULL),(15,4,'Benefits','Human Resources',NULL),(16,4,'Payroll','Human Resources',NULL),(17,4,'Terminations','Human Resources',NULL),(18,4,'HR Reports','Human Resources',NULL),(19,6,'Manage User Accounts','Global',NULL),(20,6,'Assign Roles','Global',NULL),(21,6,'Help Desk','Global',NULL),(22,1,'Assign Roles','Super','/assign'),(23,1,'Modify Roles','Super','/modifyRole'),(24,1,'Admin Links','Super','/adminLinks'),(25,20,'test7','testRole',NULL),(26,20,'test2','testRole',NULL),(27,20,'test3','testRole',NULL),(28,1,'Add / Remove Admin Role','Super','/adminroles');
/*!40000 ALTER TABLE `roleLink` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roleName`
--

DROP TABLE IF EXISTS `roleName`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roleName` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roleName`
--

LOCK TABLES `roleName` WRITE;
/*!40000 ALTER TABLE `roleName` DISABLE KEYS */;
INSERT INTO `roleName` VALUES (1,'Super'),(2,'Engineering'),(3,'Finance'),(4,'Human Resources'),(5,'Sales'),(6,'Global'),(20,'newnameforrole'),(27,'Unassigned'),(28,'testrole55');
/*!40000 ALTER TABLE `roleName` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-02  3:40:00

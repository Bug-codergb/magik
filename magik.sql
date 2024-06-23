-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: magik
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `id` char(50) NOT NULL,
  `originalname` text,
  `filename` varchar(500) DEFAULT NULL,
  `size` varchar(200) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `url` varchar(500) NOT NULL,
  `description` text,
  `warn` varchar(500) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES ('1717161864692','朴彩英.jpeg','1717161864670.jpeg','119115','2024-05-31 13:24:24','2024-05-31 13:24:24','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717161864670.jpeg','朴彩印','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717161864714','龙珠.avif','1717161864703.avif','71627','2024-05-31 13:24:24','2024-05-31 13:24:24','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717161864703.avif','龙珠','[{\"value\":\"暴力\",\"checked\":true},{\"value\":\"敏感内容\",\"checked\":true}]'),('1717584944240','👮.jpeg','1717584944046.jpeg','194277','2024-06-05 10:55:44','2024-06-05 10:55:44','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717584944046.jpeg','1111111','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717584944275','动漫.jpeg','1717584944263.jpeg','223667','2024-06-05 10:55:44','2024-06-05 10:55:44','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717584944263.jpeg','1212','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828126434','爱转角.avif','1717828126273.avif','12821','2024-06-08 06:28:46','2024-06-08 06:28:46','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828126273.avif','','[{\"value\":\"暴力\"'),('1717828518825','2.avif','1717828518786.avif','26659','2024-06-08 06:35:18','2024-06-08 06:35:18','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828518786.avif','','[{\"value\":\"暴力\"'),('1717828702855','👮.jpeg','1717828702761.jpeg','194277','2024-06-08 06:38:22','2024-06-08 06:38:22','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828702761.jpeg','老虎','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828702902','龙珠.avif','1717828702865.avif','263318','2024-06-08 06:38:22','2024-06-08 06:38:22','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828702865.avif','再见了，鸟山明','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828777885','yui.avif','1717828777854.avif','7083','2024-06-08 06:39:37','2024-06-08 06:39:37','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828777854.avif','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828777904','程艾影.avif','1717828777895.avif','15251','2024-06-08 06:39:37','2024-06-08 06:39:37','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828777895.avif','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828777920','爱转角.avif','1717828777907.avif','12821','2024-06-08 06:39:37','2024-06-08 06:39:37','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828777907.avif','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828777936','banner.jpeg','1717828777923.jpeg','65635','2024-06-08 06:39:37','2024-06-08 06:39:37','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828777923.jpeg','好大的图片','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828858767','1709727209957.avif','1717828858747.avif','67359','2024-06-08 06:40:58','2024-06-08 06:40:58','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828858747.avif','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828858785','1709728395840.avif','1717828858772.avif','70224','2024-06-08 06:40:58','2024-06-08 06:40:58','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828858772.avif','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828858805','1709729803974.avif','1717828858789.avif','111032','2024-06-08 06:40:58','2024-06-08 06:40:58','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828858789.avif','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828858828','1709731148576.webp','1717828858808.webp','299273','2024-06-08 06:40:58','2024-06-08 06:40:58','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828858808.webp','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1717828858846','1709730325528.jpeg','1717828858831.jpeg','84337','2024-06-08 06:40:58','2024-06-08 06:40:58','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1717828858831.jpeg','','[{\"value\":\"暴力\",\"checked\":false},{\"value\":\"敏感内容\",\"checked\":false}]'),('1718197797979','1709727346386.avif','1718197797742.avif','82554','2024-06-12 13:09:57','2024-06-12 13:09:57','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718197797742.avif','','[{\"value\":\"暴力\"'),('1718198106335','1709728395840.avif','1718198106301.avif','27970','2024-06-12 13:15:06','2024-06-12 13:15:06','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718198106301.avif','用户头像',''),('1718198313069','1709727454538.avif','1718198313037.avif','26998','2024-06-12 13:18:33','2024-06-12 13:18:33','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718198313037.avif','用户头像',''),('1718198379818','1709727346386.avif','1718198379778.avif','34339','2024-06-12 13:19:39','2024-06-12 13:19:39','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718198379778.avif','用户头像',''),('1718198700370','1709727346386.avif','1718198700311.avif','34339','2024-06-12 13:25:00','2024-06-12 13:25:00','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718198700311.avif','用户头像',''),('1718199182419','1709727454538.avif','1718199182399.avif','28516','2024-06-12 13:33:02','2024-06-12 13:33:02','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718199182399.avif','用户头像',''),('1718199226455','1709901874611.avif','1718199226430.avif','27222','2024-06-12 13:33:46','2024-06-12 13:33:46','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718199226430.avif','用户头像',''),('1718199341711','1709904349286.avif','1718199341691.avif','19515','2024-06-12 13:35:41','2024-06-12 13:35:41','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718199341691.avif','用户头像',''),('1718365760884','1709970701191.avif','1718365760781.avif','34253','2024-06-14 11:49:20','2024-06-14 11:49:20','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718365760781.avif','用户头像',''),('1718365808177','1709727722763.avif','1718365808154.avif','39450','2024-06-14 11:50:08','2024-06-14 11:50:08','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718365808154.avif','用户头像',''),('1718365844022','1710049013105.avif','1718365843989.avif','30899','2024-06-14 11:50:44','2024-06-14 11:50:44','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718365843989.avif','用户头像',''),('1718365973530','1709728895777.avif','1718365973509.avif','24828','2024-06-14 11:52:53','2024-06-14 11:52:53','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718365973509.avif','用户头像',''),('1718366025953','1709906509229.avif','1718366025942.avif','31243','2024-06-14 11:53:45','2024-06-14 11:53:45','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718366025942.avif','用户头像',''),('1718517471378','1709727454538.avif','1718517471201.avif','26978','2024-06-16 05:57:51','2024-06-16 05:57:51','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718517471201.avif','用户头像',''),('1718529394318','1709967248839.webp','1718529394273.webp','29455','2024-06-16 09:16:34','2024-06-16 09:16:34','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718529394273.webp','用户头像',''),('1719127486470','1709904349286.avif','1719127486327.avif','19249','2024-06-23 07:24:46','2024-06-23 07:24:46','http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1719127486327.avif','用户头像','');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` char(50) NOT NULL,
  `parentId` char(50) DEFAULT '-1',
  `title` varchar(200) DEFAULT NULL,
  `path` varchar(200) DEFAULT NULL,
  `redirect` varchar(200) DEFAULT NULL,
  `icon` varchar(200) DEFAULT NULL,
  `component` varchar(200) DEFAULT NULL,
  `meta` varchar(200) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sort` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES ('-1','-1','-1','-1','-1','AccountBookOutlined','-1','-1','2024-06-03 12:43:46','2024-06-03 12:43:59',0),('1717421156223','-1','系统设置','/home/setting','/home/menu','SettingOutlined','menu',NULL,'2024-06-03 13:25:56','2024-06-04 11:42:46',100),('1717421980309','1717421156223','菜单管理','/home/menu','/home/menu','AppstoreOutlined','menu',NULL,'2024-06-03 13:39:40','2024-06-03 13:53:08',2),('1717422066306','1717421156223','角色管理','/home/role','/home/role','UsergroupAddOutlined','role',NULL,'2024-06-03 13:41:06','2024-06-03 13:53:08',1),('1717422209316','-1','首页','/home','/home','HomeOutlined','home',NULL,'2024-06-03 13:43:29','2024-06-03 14:02:10',1),('1717422759317','1717421156223','用户管理','/home/user','/home/user','UserOutlined','user',NULL,'2024-06-03 13:52:39','2024-06-03 13:52:39',0),('1717501338309','-1','列表','/home/list','/home/list','AuditOutlined','list',NULL,'2024-06-04 11:42:18','2024-06-04 11:42:18',3),('1717501446243','-1','评论','/home/comment','/home/comment','CommentOutlined','comment',NULL,'2024-06-04 11:44:06','2024-06-04 11:44:06',4),('1717501507589','-1','用户通知','/home/notify','/home/notify','BellOutlined','notify',NULL,'2024-06-04 11:45:07','2024-06-04 11:45:36',5),('1717501655087','-1','社区','/home/community','/home/community','LaptopOutlined','community',NULL,'2024-06-04 11:47:35','2024-06-04 11:47:35',6),('1717501779045','-1','标签','/home/tag','/home/tag','TagsOutlined','tag',NULL,'2024-06-04 11:49:39','2024-06-04 11:49:39',7),('1717508801960','1717421156223','文件管理','/home/file','/home/file','FileAddOutlined','file',NULL,'2024-06-04 13:46:41','2024-06-04 13:46:41',4),('1717508959818','-1','看板','/screen','/screen','FundProjectionScreenOutlined','screen',NULL,'2024-06-04 13:49:19','2024-06-04 13:49:19',8);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment`
--

DROP TABLE IF EXISTS `moment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment` (
  `id` char(50) NOT NULL,
  `content` text,
  `userId` char(50) DEFAULT NULL,
  `view` char(50) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment`
--

LOCK TABLES `moment` WRITE;
/*!40000 ALTER TABLE `moment` DISABLE KEYS */;
INSERT INTO `moment` VALUES ('1717828702929','豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名','110',NULL,'2024-06-08 06:38:22','2024-06-08 06:38:22'),('1717828777954','遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深','110',NULL,'2024-06-08 06:39:37','2024-06-08 06:39:37'),('1717828858865','时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。','110',NULL,'2024-06-08 06:40:58','2024-06-08 06:40:58'),('1718197798027','','110',NULL,'2024-06-12 13:09:58','2024-06-12 13:09:58');
/*!40000 ALTER TABLE `moment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment_file`
--

DROP TABLE IF EXISTS `moment_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment_file` (
  `mId` char(50) DEFAULT NULL,
  `fId` char(50) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `mId` (`mId`),
  KEY `fId` (`fId`),
  CONSTRAINT `moment_file_ibfk_1` FOREIGN KEY (`mId`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_file_ibfk_2` FOREIGN KEY (`fId`) REFERENCES `file` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment_file`
--

LOCK TABLES `moment_file` WRITE;
/*!40000 ALTER TABLE `moment_file` DISABLE KEYS */;
INSERT INTO `moment_file` VALUES ('1717828702929','1717828702855','2024-06-08 06:38:22','2024-06-08 06:38:22'),('1717828702929','1717828702902','2024-06-08 06:38:22','2024-06-08 06:38:22'),('1717828777954','1717828777885','2024-06-08 06:39:37','2024-06-08 06:39:37'),('1717828777954','1717828777904','2024-06-08 06:39:37','2024-06-08 06:39:37'),('1717828777954','1717828777920','2024-06-08 06:39:37','2024-06-08 06:39:37'),('1717828777954','1717828777936','2024-06-08 06:39:37','2024-06-08 06:39:37'),('1717828858865','1717828858767','2024-06-08 06:40:58','2024-06-08 06:40:58'),('1717828858865','1717828858785','2024-06-08 06:40:58','2024-06-08 06:40:58'),('1717828858865','1717828858805','2024-06-08 06:40:58','2024-06-08 06:40:58'),('1717828858865','1717828858828','2024-06-08 06:40:58','2024-06-08 06:40:58'),('1717828858865','1717828858846','2024-06-08 06:40:58','2024-06-08 06:40:58'),('1718197798027','1718197797979','2024-06-12 13:09:58','2024-06-12 13:09:58');
/*!40000 ALTER TABLE `moment_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` char(50) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('1717675082405','管理员','2024-06-06 11:58:02','2024-06-06 11:58:02'),('1717675094692','主管','2024-06-06 11:58:14','2024-06-06 11:58:14'),('1717675098706','开发','2024-06-06 11:58:18','2024-06-06 11:58:18'),('1717675103624','测试','2024-06-06 11:58:23','2024-06-06 11:58:23'),('1717675109108','UI','2024-06-06 11:58:29','2024-06-06 11:58:29'),('1717675114406','总经理','2024-06-06 11:58:34','2024-06-06 11:58:34'),('1717675133787','执行董事','2024-06-06 11:58:53','2024-06-06 11:58:53'),('1717675138037','游客','2024-06-06 11:58:58','2024-06-06 11:58:58'),('1717675141809','vip','2024-06-06 11:59:01','2024-06-06 11:59:01'),('1717675162652','项目经理','2024-06-06 11:59:22','2024-06-06 11:59:22'),('1717675166993','总监','2024-06-06 11:59:26','2024-06-06 11:59:26'),('1717675232766','路人','2024-06-06 12:00:32','2024-06-06 12:00:32'),('1718626691720','俗人','2024-06-17 12:18:11','2024-06-17 12:18:11'),('1719127660934','帅哥','2024-06-23 07:27:40','2024-06-23 07:27:40'),('1719127817314','美女','2024-06-23 07:30:17','2024-06-23 07:30:17'),('1719127858107','打工人','2024-06-23 07:30:58','2024-06-23 07:30:58');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_menu`
--

DROP TABLE IF EXISTS `role_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_menu` (
  `roleId` char(50) DEFAULT NULL,
  `menuId` char(50) DEFAULT NULL,
  `half` int DEFAULT '0',
  KEY `roleId` (`roleId`),
  KEY `menuId` (`menuId`),
  CONSTRAINT `role_menu_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_menu_ibfk_2` FOREIGN KEY (`menuId`) REFERENCES `menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_menu`
--

LOCK TABLES `role_menu` WRITE;
/*!40000 ALTER TABLE `role_menu` DISABLE KEYS */;
INSERT INTO `role_menu` VALUES ('1717675098706','1717422759317',0),('1717675098706','1717422066306',0),('1717675098706','1717501779045',0),('1717675098706','1717421156223',1),('1717675082405','1717501655087',0),('1717675082405','1717422066306',0),('1717675082405','1717421980309',0),('1717675082405','1717501338309',0),('1717675082405','1717422759317',0),('1717675082405','1717501446243',0),('1717675082405','1717501507589',0),('1717675082405','1717422209316',0),('1717675082405','1717501779045',0),('1717675082405','1717508959818',0),('1717675082405','1717508801960',0),('1717675082405','1717421156223',0);
/*!40000 ALTER TABLE `role_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` char(50) NOT NULL,
  `userName` varchar(500) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `avatar` varchar(300) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `gender` int DEFAULT '0',
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('110','叶子','123','1718199341711','2024-05-25 08:05:39','2024-06-14 12:51:39',1),('1718110795820','郭斌','345','1718366025953','2024-06-11 12:59:55','2024-06-15 09:45:14',1),('1718365762372','李娜','123','1718365760884','2024-06-14 11:49:22','2024-06-14 11:49:22',1),('1718365809894','曹操','123','1718365808177','2024-06-14 11:50:09','2024-06-14 11:50:09',1),('1718365845148','郭嘉','123','1718365844022','2024-06-14 11:50:45','2024-06-14 11:50:45',1),('1718365974607','刘璋','123','1718365973530','2024-06-14 11:52:54','2024-06-14 11:52:54',1),('1718366027536','贾诩','123','1718366025953','2024-06-14 11:53:47','2024-06-14 11:53:47',0),('1718529395695','刘备','123','1718529394318','2024-06-16 09:16:35','2024-06-16 09:16:35',0),('1719127487396','荀彧','123','1719127486470','2024-06-23 07:24:47','2024-06-23 07:24:47',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `roleId` char(50) DEFAULT NULL,
  `userId` char(50) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `roleId` (`roleId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES ('1717675133787','1718110795820','2024-06-16 06:35:48','2024-06-16 06:35:48'),('1717675114406','1718110795820','2024-06-16 06:35:48','2024-06-16 06:35:48'),('1717675109108','1718110795820','2024-06-16 06:35:48','2024-06-16 06:35:48'),('1717675133787','1718365762372','2024-06-16 06:35:55','2024-06-16 06:35:55'),('1717675094692','1718365762372','2024-06-16 06:35:55','2024-06-16 06:35:55'),('1717675098706','1718365762372','2024-06-16 06:35:55','2024-06-16 06:35:55'),('1717675103624','1718365762372','2024-06-16 06:35:55','2024-06-16 06:35:55'),('1717675138037','1718365809894','2024-06-16 06:36:02','2024-06-16 06:36:02'),('1717675133787','1718365809894','2024-06-16 06:36:02','2024-06-16 06:36:02'),('1717675133787','1718365845148','2024-06-16 06:36:08','2024-06-16 06:36:08'),('1717675114406','1718365845148','2024-06-16 06:36:08','2024-06-16 06:36:08'),('1717675098706','1718365974607','2024-06-16 06:36:15','2024-06-16 06:36:15'),('1717675103624','1718365974607','2024-06-16 06:36:15','2024-06-16 06:36:15'),('1717675109108','1718366027536','2024-06-16 06:36:22','2024-06-16 06:36:22'),('1717675098706','1718366027536','2024-06-16 06:36:22','2024-06-16 06:36:22'),('1717675114406','1718366027536','2024-06-16 06:36:22','2024-06-16 06:36:22'),('1717675232766','1718529395695','2024-06-16 09:16:35','2024-06-16 09:16:35'),('1717675082405','110','2024-06-21 13:33:12','2024-06-21 13:33:12'),('1717675133787','1719127487396','2024-06-23 07:24:47','2024-06-23 07:24:47'),('1717675138037','1719127487396','2024-06-23 07:24:47','2024-06-23 07:24:47');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-23 15:41:21

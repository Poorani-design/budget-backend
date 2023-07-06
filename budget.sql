-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2023 at 10:55 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `budget`
--

-- --------------------------------------------------------

--
-- Table structure for table `expense`
--

CREATE TABLE `expense` (
  `eid` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `ename` text NOT NULL,
  `eamount` varchar(50) NOT NULL,
  `edate` varchar(50) NOT NULL,
  `eremarks` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expense`
--

INSERT INTO `expense` (`eid`, `uid`, `ename`, `eamount`, `edate`, `eremarks`) VALUES
(1, '1', 'milk', '32', '02/07/2023', 'packet milk '),
(2, '1', 'flower', '50', '02/07/2023', ''),
(3, '1', 'Shoes', '2500', '02/07/2023', 'From saravana stores and pending vijay shoes'),
(4, '1', 'LIc', '5210', '02/07/2023', ''),
(5, '1', 'RD - Post office', '6060', 'previous month RD and fine Rs.60 ', 'previous month RD and fine Rs.60 ');

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `iid` int(11) NOT NULL,
  `icid` varchar(50) NOT NULL,
  `uid` int(11) NOT NULL,
  `idate` varchar(50) NOT NULL,
  `iamount` varchar(50) NOT NULL,
  `iremarks` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`iid`, `icid`, `uid`, `idate`, `iamount`, `iremarks`) VALUES
(1, '', 1, '07/07/2023', '5209', 'July month LIC'),
(2, '1', 1, '05/07/2023', '2000', 'null'),
(3, '', 2, '', '4000', '2000 is my amount, 2000 is poorani amount'),
(4, '1', 1, '07/07/2023', '87000', 'July month LIC'),
(5, 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(6, 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(7, 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(8, 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(9, 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(10, 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(11, 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(12, '2', 1, '07/07/2023', '70000', '5 YEARS FIXED DEPOSIT ');

-- --------------------------------------------------------

--
-- Table structure for table `investment_category`
--

CREATE TABLE `investment_category` (
  `icid` int(11) NOT NULL,
  `iname` varchar(50) NOT NULL,
  `istartdate` varchar(50) NOT NULL,
  `ienddate` varchar(50) NOT NULL,
  `iperiod` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `investment_category`
--

INSERT INTO `investment_category` (`icid`, `iname`, `istartdate`, `ienddate`, `iperiod`) VALUES
(1, 'MSSC - POST OFFICE', '03/06/2023', '03/06/2025', 'Fixed deposit'),
(2, 'undefined', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `passive`
--

CREATE TABLE `passive` (
  `pid` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `pcompany` varchar(50) NOT NULL,
  `pamount` varchar(50) NOT NULL,
  `pdate` varchar(50) NOT NULL,
  `premarks` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `passive`
--

INSERT INTO `passive` (`pid`, `uid`, `pname`, `pcompany`, `pamount`, `pdate`, `premarks`) VALUES
(1, '2', 'Xerox', 'Metro', '', '21/08/2023', ''),
(2, '1', 'Rent', '', '', '01/07/2023', '1500 vairavel amount'),
(3, '1', 'Vijay - loan amount', '', '', '01/07/2023', ''),
(4, '1', 'mine', '', '', '30/06/2023', 'Vijay give this amount for myself'),
(5, '1', 'Gift', '', '', '01/08/2023', 'vairavel pongal gift amount'),
(6, '1', 'Pongal Gift', '', '10000', '20/01/2023', 'Pongal gift amount by Vairavel');

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `sid` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `scompany` varchar(50) NOT NULL,
  `sdate` varchar(50) NOT NULL,
  `samount` varchar(50) NOT NULL,
  `spf` varchar(50) NOT NULL,
  `sremarks` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`sid`, `uid`, `scompany`, `sdate`, `samount`, `spf`, `sremarks`) VALUES
(1, '1', 'HCL', '30/06/2023', '41657', '2100', ''),
(2, '1', 'HCL', '30/05/2023', '52000', '2100', 'dummy'),
(3, '2', 'Randstand', '28/06/2023', '32166', '2100', ''),
(4, '2', 'Randstand', '30/05/2023', '41657', '2100', 'JMay month salary - 2023'),
(5, '2', 'Randstand', '30/05/2023', '41657', '2100', 'JMay month salary 2023'),
(6, '2', 'Hcl', '30/05/2023', '41657', '2100', 'JMay month salary 2023');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `umail` varchar(50) NOT NULL,
  `uphone` varchar(50) NOT NULL,
  `upassword` varchar(50) NOT NULL,
  `uusername` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `umail`, `uphone`, `upassword`, `uusername`) VALUES
(1, 'arulpoorani88@gmail.com', '8526021884', '1234', 'Poorani Gunasekaran'),
(2, 'vijay@gmail.com', '8489273477', '1234', 'Vijayakumar Poorani'),
(3, 'arul@gmail.com', '9842331209', 'arul', 'Arul Thirunavukarasu'),
(4, 'arul@gmail.com', '9842331209', '1234', 'Arul Thirunavukarasu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expense`
--
ALTER TABLE `expense`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `investment`
--
ALTER TABLE `investment`
  ADD PRIMARY KEY (`iid`);

--
-- Indexes for table `investment_category`
--
ALTER TABLE `investment_category`
  ADD PRIMARY KEY (`icid`);

--
-- Indexes for table `passive`
--
ALTER TABLE `passive`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expense`
--
ALTER TABLE `expense`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `investment_category`
--
ALTER TABLE `investment_category`
  MODIFY `icid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `passive`
--
ALTER TABLE `passive`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

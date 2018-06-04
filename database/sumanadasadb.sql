-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2018 at 08:27 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sumanadasadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrator`
--

CREATE TABLE `administrator` (
  `indexno` varchar(8) DEFAULT NULL,
  `salary` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `administrator`
--

INSERT INTO `administrator` (`indexno`, `salary`) VALUES
('4', '0.00'),
('56', '0.00'),
('23', '0.00'),
('45858282', '5002.00');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `indexno` varchar(8) DEFAULT NULL,
  `salary` decimal(15,2) DEFAULT NULL,
  `position` varchar(15) DEFAULT NULL,
  `hours_per_week` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`indexno`, `salary`, `position`, `hours_per_week`) VALUES
('5', '1000.00', 'Worker', 40);

-- --------------------------------------------------------

--
-- Table structure for table `employeeassign`
--

CREATE TABLE `employeeassign` (
  `indexno` varchar(8) DEFAULT NULL,
  `hall_id` int(3) DEFAULT NULL,
  `assigned_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employeeassign`
--

INSERT INTO `employeeassign` (`indexno`, `hall_id`, `assigned_date`) VALUES
('5', 1, '2017-12-15 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hall`
--

CREATE TABLE `hall` (
  `hall_id` int(3) NOT NULL,
  `hall_name` varchar(8) DEFAULT NULL,
  `hall_type` varchar(5) DEFAULT NULL,
  `hall_capacity` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hall`
--

INSERT INTO `hall` (`hall_id`, `hall_name`, `hall_type`, `hall_capacity`) VALUES
(1, 'Sumana', 'male', 125),
(2, 'A hostel', 'femal', 300);

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `hall_id` int(3) DEFAULT NULL,
  `room_no` int(3) DEFAULT NULL,
  `item_id` int(8) DEFAULT NULL,
  `item_type` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Stand-in structure for view `login`
-- (See below for the actual view)
--
CREATE TABLE `login` (
`indexNo` varchar(8)
,`password` varchar(20)
,`type` varchar(80)
);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int(20) NOT NULL,
  `student_id` varchar(40) NOT NULL,
  `payment_id` int(20) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `details` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `student_id` varchar(8) DEFAULT NULL,
  `payment_id` int(20) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pay_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`student_id`, `payment_id`, `price`, `pay_date`) VALUES
('1', 1, '50000.00', '2017-12-17 09:55:51'),
('1', 2, '501.00', '2017-12-17 09:55:51'),
('1', 3, '501.00', '2017-12-17 09:55:56'),
('1', 4, '500.00', '2017-12-17 13:11:46'),
('1', 5, '50000.00', '2017-12-18 04:33:38');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `req_id` int(10) NOT NULL,
  `indexno` varchar(10) NOT NULL,
  `hall_id` int(10) NOT NULL,
  `room_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`req_id`, `indexno`, `hall_id`, `room_no`) VALUES
(22, '100', 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(3) DEFAULT NULL,
  `role_name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Employee'),
(3, 'student');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `hall_id` int(3) DEFAULT NULL,
  `room_no` int(3) NOT NULL,
  `room_type` varchar(10) DEFAULT NULL,
  `monthly_fee` decimal(10,2) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `room_capacity` int(2) DEFAULT NULL,
  `free_beds` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`hall_id`, `room_no`, `room_type`, `monthly_fee`, `status`, `room_capacity`, `free_beds`) VALUES
(1, 1, 'double', '500.00', 'available', 5, 1),
(1, 2, 'Single', '40000.00', 'Available', 5, 1),
(1, 3, 'Single', '50000.00', 'Available', 5, 4),
(1, 4, 'Single', '30000.00', 'Available', 5, 3),
(1, 5, 'Single', '50000.00', 'Available', 5, 3),
(1, 6, 'Single', '50000.00', 'Available', 5, 0),
(1, 7, 'Single', '50000.00', 'Available', 5, 0),
(1, 8, 'Single', '50000.00', 'Available', 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `indexno` varchar(8) DEFAULT NULL,
  `dept_name` varchar(10) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `hall_id` int(3) DEFAULT NULL,
  `room_id` int(3) DEFAULT NULL,
  `assigned_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `due_price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`indexno`, `dept_name`, `year`, `hall_id`, `room_id`, `assigned_date`, `due_price`) VALUES
('1', 'CSE', 2015, 1, 1, '2017-12-18 04:33:38', 199500),
('66576767', '1', NULL, NULL, NULL, '2017-12-18 03:06:50', 0),
('66576767', 'CSE', NULL, NULL, NULL, '2017-12-18 03:09:01', 0),
('10', 'CSE', NULL, NULL, NULL, '2017-12-18 04:05:56', 0),
('100', 'CSE', NULL, NULL, NULL, '2017-12-18 04:06:09', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `indexno` varchar(8) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `profilePic` tinyblob,
  `email` varchar(40) DEFAULT NULL,
  `type` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`indexno`, `firstname`, `lastname`, `password`, `profilePic`, `email`, `type`) VALUES
('1', 'Manee', 'Indrachapa', '456456', NULL, 'ejeh', 'student'),
('10', 'maneesddsds', 'ddsdsdadad', '123', NULL, NULL, 'Student'),
('100', 'Maneesha', 'Indrachapa', '123', NULL, NULL, 'Student'),
('12', 'mbgbg', 'bgbgbg', '123', NULL, NULL, 'Student'),
('1500', 'lkkk', 'mkmo', '123', NULL, NULL, 'Admin'),
('2', 'Manee', 'indra', '456', NULL, 'manee@gmail.com', 'Admin'),
('23', 'ddvdsv', 'vsvv', '123', NULL, NULL, 'Admin'),
('23456', 'vfdvfvfv', 'fvfvfv', '123', NULL, NULL, 'Admin'),
('334', 'ddvdsv', 'vsvv', '123', NULL, NULL, 'Admin'),
('4', 'ddvdsv', 'vsvv', '123', NULL, NULL, 'Admin'),
('45858282', 'lkkk', 'mkmo', '123', NULL, NULL, 'Admin'),
('5', 'Thilina', 'Prasad', '123', NULL, NULL, 'Employee'),
('56', 'ddvdsv', 'vsvv', '123', NULL, NULL, 'Admin'),
('66576767', 'vfvv', 'fvfvf', '123', NULL, NULL, 'Student'),
('67', 'cdcd', 'cdcd', '123', NULL, NULL, 'Admin'),
('casd', 'csacs', 'scsc', '123', NULL, NULL, 'Admin'),
('vvsddsdd', 'ssdvdv', 'vsvv', '123', NULL, NULL, 'Admin');

-- --------------------------------------------------------

--
-- Structure for view `login`
--
DROP TABLE IF EXISTS `login`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `login`  AS  select `user`.`indexno` AS `indexNo`,`user`.`password` AS `password`,`user`.`type` AS `type` from `user` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD KEY `indexno` (`indexno`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD KEY `indexno` (`indexno`);

--
-- Indexes for table `employeeassign`
--
ALTER TABLE `employeeassign`
  ADD KEY `indexno` (`indexno`);

--
-- Indexes for table `hall`
--
ALTER TABLE `hall`
  ADD PRIMARY KEY (`hall_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD KEY `hall_id` (`hall_id`),
  ADD KEY `room_no` (`room_no`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `payment_id` (`payment_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`req_id`),
  ADD KEY `indexno` (`indexno`),
  ADD KEY `request_ibfk_2` (`hall_id`),
  ADD KEY `request_ibfk_3` (`room_no`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_name`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_no`),
  ADD KEY `hall_id` (`hall_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD KEY `room_id` (`room_id`),
  ADD KEY `hall_id` (`hall_id`),
  ADD KEY `indexno` (`indexno`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`indexno`),
  ADD KEY `type` (`type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `req_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `administrator`
--
ALTER TABLE `administrator`
  ADD CONSTRAINT `administrator_ibfk_1` FOREIGN KEY (`indexno`) REFERENCES `user` (`indexno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`indexno`) REFERENCES `user` (`indexno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employeeassign`
--
ALTER TABLE `employeeassign`
  ADD CONSTRAINT `employeeassign_ibfk_1` FOREIGN KEY (`indexno`) REFERENCES `employee` (`indexno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`hall_id`) REFERENCES `hall` (`hall_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`payment_id`),
  ADD CONSTRAINT `notification_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `payment` (`student_id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`indexno`);

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `request_ibfk_1` FOREIGN KEY (`indexno`) REFERENCES `user` (`indexno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `request_ibfk_2` FOREIGN KEY (`hall_id`) REFERENCES `hall` (`hall_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `request_ibfk_3` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`hall_id`) REFERENCES `hall` (`hall_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_3` FOREIGN KEY (`indexno`) REFERENCES `user` (`indexno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`type`) REFERENCES `role` (`role_name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

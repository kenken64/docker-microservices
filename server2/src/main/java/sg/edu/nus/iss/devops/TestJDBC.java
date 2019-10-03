package sg.edu.nus.iss.devops;

import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TestJDBC {

    public static void main(String[] args) {

        System.out.println("MySQL JDBC Connection Testing ~");
        
        String SQL_SELECT = "Select * from TASKS";

        try (Connection conn = DriverManager.getConnection(
                "jdbc:mysql://172.17.0.2:3306/testdb", "root", "password");
             PreparedStatement preparedStatement = conn.prepareStatement(SQL_SELECT)) {

            ResultSet resultSet = preparedStatement.executeQuery();
            System.out.println(resultSet);
            while (resultSet.next()) {
            
            }
        } catch (SQLException e) {
            System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
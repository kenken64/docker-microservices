package sg.edu.nus.iss.devops;

import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TestJDBC {

    public static void main(String[] args) {

        System.out.println("MySQL JDBC Connection Testing ~");
        
        String SQL_SELECT = "select id, friend_name, contact_no, email, created_at from friends";

        try (Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3307/testdb", "root", "root1234");
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
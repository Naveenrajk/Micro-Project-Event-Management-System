package com.ems.test;

import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTestRunner {

	@Test
	public void openLogin() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.id("login")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("email")).sendKeys("naveen@gmail.com");
		driverInsert.findElement(By.id("password")).sendKeys("345");
		driverInsert.findElement(By.id("loginnow")).click();
		System.out.println(driverInsert.getTitle());

	}

	public static void main(String[] args) {
		LoginTestRunner obj = new LoginTestRunner();
		obj.openLogin();
	}
}

package com.ems.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class RegisterTestRunner {
	@Test
	public void openRegister() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.id("register")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("email")).sendKeys("naveen@gmail.com");
		driverInsert.findElement(By.id("password")).sendKeys("345");
		driverInsert.findElement(By.id("registersoon")).click();
		System.out.println(driverInsert.getTitle());

	}

	public static void main(String[] args) {
		RegisterTestRunner obj = new RegisterTestRunner();
		obj.openRegister();
	}
}

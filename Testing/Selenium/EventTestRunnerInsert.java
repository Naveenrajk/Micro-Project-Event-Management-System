package com.ems.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class EventTestRunnerInsert {

	static WebDriver driverInsert;

	@Test
	public void openAddEvent() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.id("login")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("email")).sendKeys("admin@gmail.com");
		driverInsert.findElement(By.id("password")).sendKeys("123");
		driverInsert.findElement(By.id("loginnow")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("event1")).click();
		driverInsert.findElement(By.id("eventId")).sendKeys("301");
		driverInsert.findElement(By.id("eventName")).sendKeys("Arun Birthday");
		driverInsert.findElement(By.name("mat")).click();
		driverInsert.findElement(By.name("General")).click();
		driverInsert.findElement(By.id("eventDate")).sendKeys("2024-02-13T18:30:00.000Z");
		driverInsert.findElement(By.id("eventTime")).sendKeys("08.00 PM");
		driverInsert.findElement(By.id("eventVenue")).sendKeys("Chennai");
		driverInsert.findElement(By.id("email")).sendKeys("naveen@gmail.com");
		driverInsert.findElement(By.id("insert")).click();
		System.out.println(driverInsert.getTitle());

	}

	public static void main(String[] args) {

		EventTestRunnerInsert obj = new EventTestRunnerInsert();

		obj.openAddEvent();

	}

}

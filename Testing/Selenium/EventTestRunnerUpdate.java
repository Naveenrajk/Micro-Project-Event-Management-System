package com.ems.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class EventTestRunnerUpdate {
	static WebDriver driverUpdate;

	@Test
	public void openEditEvent() {
		WebDriver driverUpdate;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverUpdate = new ChromeDriver();
		driverUpdate.navigate().to("http://localhost:4200/");
		driverUpdate.findElement(By.id("login")).click();
		System.out.println(driverUpdate.getTitle());

		driverUpdate.findElement(By.id("email")).sendKeys("admin@gmail.com");
		driverUpdate.findElement(By.id("password")).sendKeys("123");
		driverUpdate.findElement(By.id("loginnow")).click();
		System.out.println(driverUpdate.getTitle());

		driverUpdate.findElement(By.name("update")).click();
		driverUpdate.findElement(By.id("eventId")).clear();
		driverUpdate.findElement(By.id("eventId")).sendKeys("301");
		driverUpdate.findElement(By.id("eventName")).sendKeys("Arun Meeting");
		driverUpdate.findElement(By.name("mat")).click();
		driverUpdate.findElement(By.name("General")).click();
		driverUpdate.findElement(By.id("eventDate")).sendKeys("2024-02-13T18:30:00.000Z");
		driverUpdate.findElement(By.id("eventTime")).sendKeys("08.00 PM");
		driverUpdate.findElement(By.id("eventVenue")).sendKeys("Chennai");
		driverUpdate.findElement(By.id("email")).sendKeys("naveen@gmail.com");
		driverUpdate.findElement(By.id("update")).click();
		System.out.println(driverUpdate.getTitle());

	}

	public static void main(String[] args) {

		EventTestRunnerUpdate obj = new EventTestRunnerUpdate();

		obj.openEditEvent();

	}
}


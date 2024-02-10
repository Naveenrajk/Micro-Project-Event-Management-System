package com.ems.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class ParticipantTestRunnerInsert {

	@Test
	public void openInsertParticipate() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.id("login")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("email")).sendKeys("arun@gmail.com");
		driverInsert.findElement(By.id("password")).sendKeys("arun123");
		driverInsert.findElement(By.id("loginnow")).click();

		driverInsert.findElement(By.name("ids")).sendKeys("104");
		driverInsert.findElement(By.name("participate")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("email")).sendKeys("arun@gmail.com");
		driverInsert.findElement(By.id("eventN")).sendKeys("Valan Christmas Eve");
		driverInsert.findElement(By.id("avail")).click();

		driverInsert.findElement(By.name("insert")).click();

		System.out.println(driverInsert.getTitle());

	}

	public static void main(String[] args) {

		ParticipantTestRunnerInsert obj = new ParticipantTestRunnerInsert();

		obj.openInsertParticipate();

	}

}

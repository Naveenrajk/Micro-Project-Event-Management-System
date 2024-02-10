package com.ems.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class ParticipantTestRunnerUpdate {

	@Test
	public void openUpdateParticipate() {
		WebDriver driverUpdate;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverUpdate = new ChromeDriver();
		driverUpdate.navigate().to("http://localhost:4200/");
		driverUpdate.findElement(By.id("login")).click();
		System.out.println(driverUpdate.getTitle());

		driverUpdate.findElement(By.id("email")).sendKeys("admin@gmail.com");
		driverUpdate.findElement(By.id("password")).sendKeys("123");
		driverUpdate.findElement(By.id("loginnow")).click();

		driverUpdate.findElement(By.id("manage")).click();
		System.out.println(driverUpdate.getTitle());

		driverUpdate.findElement(By.id("email")).sendKeys("arun@gmail.com");
		driverUpdate.findElement(By.id("eventN")).sendKeys("Valan Christmas Eve");
		driverUpdate.findElement(By.id("avail")).click();

		driverUpdate.findElement(By.name("update")).click();

		System.out.println(driverUpdate.getTitle());

	}

	public static void main(String[] args) {

		ParticipantTestRunnerUpdate obj = new ParticipantTestRunnerUpdate();

		obj.openUpdateParticipate();

	}
}


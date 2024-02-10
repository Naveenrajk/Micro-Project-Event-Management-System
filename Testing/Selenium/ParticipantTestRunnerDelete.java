package com.ems.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class ParticipantTestRunnerDelete {

	@Test
	public void openDeleteParticipate() {
		WebDriver driverDelete;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverDelete = new ChromeDriver();
		driverDelete.navigate().to("http://localhost:4200/");
		driverDelete.findElement(By.id("login")).click();
		System.out.println(driverDelete.getTitle());

		driverDelete.findElement(By.id("email")).sendKeys("admin@gmail.com");
		driverDelete.findElement(By.id("password")).sendKeys("123");
		driverDelete.findElement(By.id("loginnow")).click();

		driverDelete.findElement(By.id("manage")).click();
		System.out.println(driverDelete.getTitle());

		driverDelete.findElement(By.id("email")).sendKeys("arun@gmail.com");

		driverDelete.findElement(By.name("delete")).click();

		System.out.println(driverDelete.getTitle());

	}

	public static void main(String[] args) {

		ParticipantTestRunnerDelete obj = new ParticipantTestRunnerDelete();

		obj.openDeleteParticipate();

	}
}

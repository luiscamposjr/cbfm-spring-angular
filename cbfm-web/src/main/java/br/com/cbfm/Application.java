package br.com.cbfm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import br.com.cbfm.core.security.ApplicationSecurity;


@SpringBootApplication
public class Application extends SpringBootServletInitializer{
	
	@Bean
	public WebSecurityConfigurerAdapter webSecurityConfigurerAdapter() {
		return new ApplicationSecurity();
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

	}

}


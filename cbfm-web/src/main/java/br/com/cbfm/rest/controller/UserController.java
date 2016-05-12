package br.com.cbfm.rest.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cbfm.core.dto.FilterUserDTO;
import br.com.cbfm.core.models.User;
import br.com.cbfm.core.services.UserService;

@RequestMapping("/rest/usuarios")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<User>> listAllFederacoes(FilterUserDTO filterUserDTO) {
		
		List<User> users = userService.findAll(filterUserDTO);

        if(users.isEmpty()){
            return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		userService.saveUser(user);
		return new ResponseEntity<User>(HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<User> updateFederacao(@RequestBody User user) {
			userService.updateUser(user);
		return new ResponseEntity<User>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/usuario/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteFederacao(@PathVariable("id") long id) {
		userService.deleteUser(id);
		return new ResponseEntity<User>(HttpStatus.OK);
	}
	
}
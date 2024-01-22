import { Controller, Get, Post, Put, Request, Response, Param, HttpCode, HttpStatus, Header, Redirect } from '@nestjs/common';
import { userInterface } from './user.interface';
@Controller("/user")
export class UserController {

  @Put("/profile:num")
  @Redirect("/user/route2", 303)                                      // static routing redirection to another route
  //@HttpCode(202)                                                 // sending status code along with request to server
  @HttpCode(HttpStatus.FOUND)                                    // if code is unknown, sending status message with request to server
  @Header('Content-Type', 'application/json')                  // setting response header 1
  @Header('Cont', 'applic')                                   // setting response header 2
  @Header('Contrrrr', 'applic')                              // setting response header 3
  //getProfile(@Request() req: Request, res: Response) {   // if using "Response" in paramater, httpcode,return will not send message to server(not recommended)
    getProfile(@Request() req: Request, @Param() params: userInterface) {               // injecting decorator 'Param'
        console.log(req["params"].num);                        // through Request decorator
        console.log(params);                                  // through Param decorator       
        let nlum =(ff: userInterface) => ff;
        console.log(nlum({num: '65'}));
        
        return ({url: '/user/route/'+req['params'].num, statuscode: 303});  // dynamic routing redirection
    }


  @Get("/route/'2'")
    redirectedRoute2() {
        return ("this is redirected message from route2");
    }

  @Get("/route/3")
    redirectedRoute3() {
        return ("this is redirected message from route3");
    }

}

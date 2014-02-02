package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import views.html.page1;
import views.html.page2;

public class Application extends Controller {
  
    public static Result index() {
        return redirect(routes.Application.page1());
    }

    public static Result page1() {
        return ok(page1.render());
    }

    public static Result page2() {
        return ok(page2.render());
    }
}

<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/7
 * Time: 16:17
 */
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class IndexController extends Controller{

    function main() {

        return view('origin');
    }
}

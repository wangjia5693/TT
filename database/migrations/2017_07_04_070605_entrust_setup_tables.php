<?php

/*
|--------------------------------------------------------------------------
| 权限相关表 php artisan entrust:migration生成
|--------------------------------------------------------------------------
| 值得注意的是默认生成的表不能满足需求，需要对其进行修改；此处已修改
|  如果在修改之前已经执行了migrate方法，需要执行rollback后修改
|
*/
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class EntrustSetupTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        // Create table for storing roles
        Schema::connection('mysql')->create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('display_name')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });

        // Create table for associating roles to users (Many-to-Many)
        Schema::connection('mysql')->create('role_user', function (Blueprint $table) {
            $table->integer('user_id')->unsigned();
            $table->integer('role_id')->unsigned();

            $table->foreign('user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->primary(['user_id', 'role_id']);
        });

        // Create table for storing permissions
        Schema::connection('mysql')->create('permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fid')->default(0)->comment('菜单父ID');
            $table->string('icon')->nullable()->comment('font-awesome图标class');
            $table->string('name')->unique();
            $table->string('display_name')->nullable();
            $table->string('description')->nullable();
            $table->tinyInteger('is_menu')->default(0)->comment('是否菜单显示');
            $table->tinyInteger('sort')->default(0)->comment('排序');
            $table->timestamps();
        });

        // Create table for associating permissions to roles (Many-to-Many)
        Schema::connection('mysql')->create('permission_role', function (Blueprint $table) {
            $table->integer('permission_id')->unsigned();
            $table->integer('role_id')->unsigned();

            $table->foreign('permission_id')->references('id')->on('permissions')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->primary(['permission_id', 'role_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return  void
     */
    public function down()
    {
        Schema::connection('mysql')->drop('permission_role');
        Schema::connection('mysql')->drop('permissions');
        Schema::connection('mysql')->drop('role_user');
        Schema::connection('mysql')->drop('roles');
    }
}

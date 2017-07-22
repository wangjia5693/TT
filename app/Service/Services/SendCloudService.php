<?php
/*
   |--------------------------------------------------------------------------
   | 自定义sendCloud邮件服务;具体业务逻辑代码
   |--------------------------------------------------------------------------
   | 默认的smtp服务容易被屏蔽
   |
*/

namespace App\Service\Services;
use GuzzleHttp\Client;

class SendCloudService
{
    protected $client = null;
    protected $API_USER =  'wangjia5693_test_XHsbM5';
    protected $API_KEY = 'ICAJquVZILSwi2Di';
    protected $url = 'http://api.sendcloud.net/apiv2/mail/send';//zdzu17eZV0OUSci9U5oDGYZLNsLK0kvD.sendcloud.org;


    public function __construct()
    {
        $this->client = new Client();
    }

    //SendCloud-sdk-发送
    public function send($data)
    {
        //您需要登录SendCloud创建API_USER，使用API_USER和API_KEY才可以进行邮件的发送。
        $param = array(
            'apiUser' => $this->API_USER,
            'apiKey' => $this->API_KEY,
            'from' => 'service@sendcloud.im',
            'fromName' => 'Sunshine系统',
            'to' => $data->email,
            'subject' => '来自Sunshine的账户密码！',
            'html' => '恭喜你，'.$data->name.'已为你注册成功！帐号为：'.$data->email.'，初始密码为：'.$data->password.'，请妥善保管您的账号密码，及时更改原始密码！',
            'respEmailId' => 'true');
        $data = http_build_query($param);
        $options = array(
            'http' => array(
                'method'  => 'POST',
                'header'  => 'Content-Type: application/x-www-form-urlencoded',
                'content' => $data
            ));
        $context  = stream_context_create($options);
        $result = file_get_contents($this->url, false, $context);
        dd ($result);
    }

    //改造
    public function Tsend(){
        $data = [
            'apiUser' => $this->API_USER,
            'apiKey' => $this->API_KEY,
            'from' => 'service@sendcloud.im',
            'fromName' => 'Sunshine系统',
            'to' => 'wangjia5693@126.com',
            'subject' => '来自Sunshine的账户密码！',
            'html' => '恭喜你，已为你注册成功！帐号为：，初始密码为：，请妥善保管您的账号密码，及时更改原始密码！',
            'respEmailId' => 'true'
        ];
        $res = $this->client->request('POST',$this->url,['from_params'=>$data]);
        dd($res);
    }
}
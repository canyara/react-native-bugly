package com.bugly;

/**
 * 开发者主动上报给 bugly 的异常
 * Created by tiangui on 2019/2/22.
 */
public class MyBuglyException extends RuntimeException {

    public MyBuglyException(String msg) {
        super(msg);
    }

}

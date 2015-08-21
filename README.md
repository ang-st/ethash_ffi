#ffi interface for libethash

to build :
```
DEST=$PWD
cd /tmp && git clone https://github.com/ang-st/ethash.git
cd ethash && mkdir build && cd build && cmake ../src/libethash && make && cp libethash.so $DEST
```





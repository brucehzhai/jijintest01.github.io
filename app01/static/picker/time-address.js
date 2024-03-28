
    $(function () {
        //模拟城市-无联动/无搜索
        var selector = $('#city-picker-selector').cityPicker({
            dataJson: cityData,
            renderMode: true,
            search: false,
            linkage: false
        })
        $('#city-picker-selector').on('choose-province.citypicker', function (event, tagert, storage) {
            console.log(storage);
        });
        //
          var selector = $('#city-picker-selector-start').cityPicker({
            dataJson: cityData,
            renderMode: true,
            search: false,
            linkage: false
        })
        $('#city-picker-selector-start').on('choose-province.citypicker', function (event, tagert, storage) {
            console.log(storage);
        });
          //
          var selector = $('#city-picker-selector-end').cityPicker({
            dataJson: cityData,
            renderMode: true,
            search: false,
            linkage: false
        })
        $('#city-picker-selector-end').on('choose-province.citypicker', function (event, tagert, storage) {
            console.log(storage);
        });
           //
          var selector = $('#city-picker-selector-area').cityPicker({
            dataJson: cityData,
            renderMode: true,
            search: false,
            linkage: false
        })
        $('#city-picker-selector-area').on('choose-province.citypicker', function (event, tagert, storage) {
            console.log(storage);
        });
           //采摘时间
          $('#cztime').datetimepicker({
                format:'yyyy-mm-dd',
                startDate:'0',
                language:'zh-CN',
                autoclose:'true',
                minView:2
            });
            //运输时间
          $('#kstime').datetimepicker({
                format:'yyyy-mm-dd',
                startDate:'0',
                language:'zh-CN',
                autoclose:'true',
                minView:2
            });
           $('#jstime').datetimepicker({
                format:'yyyy-mm-dd',
                startDate:'0',
                language:'zh-CN',
                autoclose:'true',
                minView:2
            });
            //保鲜时间
          $('#bxtime').datetimepicker({
                format:'yyyy-mm-dd',
                startDate:'0',
                language:'zh-CN',
                autoclose:'true',
                minView:2
            });
            //上架时间
          $('#sjtime').datetimepicker({
                format:'yyyy-mm-dd',
                startDate:'0',
                language:'zh-CN',
                autoclose:'true',
                minView:2
            });


    });



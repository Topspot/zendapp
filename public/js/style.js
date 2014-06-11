// A $( document ).ready() block.
$(document).ready(function() {
    var yourRegex = /((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/;// url
    $('#website').tagsInput({
        //    width: 'auto',
        pattern: yourRegex // default: false
    });

    $('.actiondelete').on('click', function(e) {
//        console.log(this);
        var rowId = $(this).attr('data-id');

        $('#modal-table').modal('show');
        $('.delete_user_btn').on('click', function(e) {
            $.ajax({
                url: '/clients/delete/' + rowId,
                dataType: 'json',
                success: function(data)
                {
                    window.location.assign("http://local.zendapp/clients/list")

                }
            });
        });

    });


    $("#form-field-select-1").change(function() {
        alert("hello");
        alert(this.value);
        return false;
//        var val1 = $('#webform option:selected"').val();
//        alert(val1);
    });

});

  jQuery(function($) {
        var oTable1 = $('#sample-table-2').dataTable({
            "aoColumns": [
                {"bSortable": false},
                null, null, null, null, null,
                {"bSortable": false}
            ]});


        $('table th input:checkbox').on('click', function() {
            var that = this;
            $(this).closest('table').find('tr > td:first-child input:checkbox')
                    .each(function() {
                        this.checked = that.checked;
                        $(this).closest('tr').toggleClass('selected');
                    });

        });

        $('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
        function tooltip_placement(context, source) {
            var $source = $(source);
            var $parent = $source.closest('table')
            var off1 = $parent.offset();
            var w1 = $parent.width();

            var off2 = $source.offset();
            var w2 = $source.width();

            if (parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2))
                return 'right';
            return 'left';
        }
    })
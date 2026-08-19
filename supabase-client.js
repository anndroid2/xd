(function () {
  var supabaseUrl = 'https://yvjdmfaretxseyzcwwia.supabase.co';
  var supabasePublishableKey = 'sb_publishable_LzjgKL5TMgGP8UG6hgE4qg_0e7R7WBY';

  window.sb = window.supabase.createClient(supabaseUrl, supabasePublishableKey);

  window.getSession = async function () {
    var result = await window.sb.auth.getSession();
    return result.data.session;
  };

  window.toBikeXSession = function (user) {
    var metadata = user.user_metadata || {};
    var name = metadata.name || user.email.split('@')[0];
    var company = metadata.company || '';
    var type = metadata.type || 'magan';

    return {
      email: user.email,
      name: name,
      company: company,
      type: type,
      displayName: type === 'elado' && company ? company : name
    };
  };

  window.bikexToast = function (message) {
    window.alert(message);
  };
}());
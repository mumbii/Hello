require 'open-uri'
require 'i18n'
require 'sinatra'
require 'mailgun-ruby'
require 'rack-flash'

class HelloLamppostWebsite < Sinatra::Base
  enable :sessions
  use Rack::Flash

  configure do
    I18n.load_path = Dir[File.join(settings.root, 'config', 'locales', '*.yml')]
    I18n.default_locale = :en
    I18n.backend.load_translations
  end

  helpers do

    def link_html_class(path)
      request.path_info.start_with?(path) ? 'current' : ''
    end

    def locale_path(path)
      return "/#{I18n.locale}#{path}"
    end

    def code_parser(code)

      code = code.to_s

      words = code.split(/\s+/)

      if words.length >= 2
        {
          object_type: (words[0..-2].join('_').downcase),
          object_code: words[-1].gsub("#", '')
        }
      else
        nil
      end

    end

  end

  # before /.*/ do
  #
  #   matches = request.path_info.match(/\A\/(sv|ru|en)(.*)/)
  #
  #   if matches
  #     I18n.locale       = matches[1]
  #     request.path_info = matches[2]
  #   else
  #     redirect to('/en' + request.path_info)
  #   end
  # end

  get '/survey' do
    redirect "https://docs.google.com/forms/d/e/1FAIpQLSdm5phYBgjy6y6VkQTrpc_8OWV4CDIeP5zIU4laBS5cPblRqA/viewform"
  end

  get '/' do
    @page_title = I18n.t(:home_title)
    erb :index
  end

  post '/contact' do

    # First, instantiate the Mailgun Client with your API key
mg_client = Mailgun::Client.new 'key-dee4e566f732ad64442a493985063a2e'

# Define your message parameters



    email = params['email']
    message = params['message']
    subject = params['subject']

    message_params =  { from: email,
                        to:   'tom@miln.co',
                        subject: subject,
                        text:    message
                      }
    # Send your message through the client
    mg_client.send_message 'sandbox1078ce278f404e358edd42b8db68c285.mailgun.org', message_params

    flash[:ok] = "Your Message Has Been Sent!"
    erb :index

  end

  get '/questions/random' do
    cache_control :public, max_age: 0
    url = "http://hello-lamp-post-api.herokuapp.com/questions/random?location_id=10&except=292&locale=sv"
    open(url).read
  end

  get '/' do
    @page_title = "Hello Lamp Post Malmo"
    erb :index
  end

end

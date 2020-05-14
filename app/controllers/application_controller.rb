class ApplicationController < ActionController::Base
    before_action :authenticate_user!
    # uncomment above for white list approach (i.e. block all routes)
end

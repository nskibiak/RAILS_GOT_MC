require 'test_helper'

class GrantsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get grants_index_url
    assert_response :success
  end

end

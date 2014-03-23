module AwsHelper

  Aws.config = { 
    access_key_id: AWS_ACCESS_KEY_ID, 
    secret_access_key: AWS_SECRET_ACCESS_KEY_ID, 
    region: AWS_REGION 
  } 

  def list_buckets
    Aws.config = { access_key_id: AWS_ACCESS_KEY_ID, secret_access_key: AWS_SECRET_ACCESS_KEY_ID, region: AWS_REGION }
    s3 = Aws::S3.new
    s3 = Aws.s3
    resp = s3.list_buckets
    return resp.buckets.map(&:name)
  end

  def list_sounds
    Aws.config = { access_key_id: AWS_ACCESS_KEY_ID, secret_access_key: AWS_SECRET_ACCESS_KEY_ID, region: AWS_REGION }
    # binding.pry
    s3 = Aws::S3.new
    s3 = Aws.s3
    resp = s3.list_objects(bucket: 'Sounds')
    songs = {}
    resp.contents.each do |song|
      songs[(song.key).downcase.split(".")[0]] = "https://s3.amazonaws.com/Sounds/#{song.key}"
    end

    songs
  end

end
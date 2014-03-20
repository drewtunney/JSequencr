module AwsHelper

  Aws.config = { access_key_id: AWS_ACCESS_KEY_ID, secret_access_key: AWS_SECRET_ACCESS_KEY_ID, region: AWS_REGION }



  def list_buckets
    s3 = Aws::S3.new
    s3 = Aws.s3
    resp = s3.list_buckets
    return resp.buckets.map(&:name)
  end

  def list_sounds
    s3 = Aws::S3.new
    # s3 = Aws.s3
    resp = s3.list_objects(bucket: 'Sounds')
    # binding.pry
    songs = []
    resp.contents.each do |song|
      songs << song.key
    end

    songs
  end

  def song_getter
    # s3 = Aws::S3.new
    # response = Aws::S3.new.list_buckets
    s3 = Aws::S3.new
    s3 = Aws.s3
    resp = s3.list_objects(bucket: 'Sounds')

    # File.open("/Users/Bryan.Tunney/local_copy.wav", "w") do |f|
    #   f.write(resp.contents.first.read)
    # end
    # binding.pry

  end

end
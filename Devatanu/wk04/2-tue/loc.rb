ARGV.each do |filename|
    file = File.new(filename, 'r')
    puts "'#{filename}' has #{file.readlines().length} lines of code"
    file.close()
end
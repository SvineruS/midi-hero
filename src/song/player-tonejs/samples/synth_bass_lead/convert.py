import os
import subprocess

# Get the current directory (where the script is located)
directory = os.getcwd()

# Iterate over all files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.wav'):
        # Replace '#' with 's' in the filename
        new_filename = filename.replace('#', 's')

        # Construct the full file paths
        input_file = os.path.join(directory, filename)
        output_file = os.path.join(directory, new_filename.replace('.wav', '.ogg'))

        # Print filenames for debugging
        print(f'Converting: {input_file} to {output_file}')

        # Construct the ffmpeg command
        command = [
            'ffmpeg',
            '-i', input_file,
            output_file
        ]

        # Run the ffmpeg command
        subprocess.run(command, check=True)

print("Conversion completed.")

# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.15

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\JetBrains\CLion 2019.2.4\bin\cmake\win\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\JetBrains\CLion 2019.2.4\bin\cmake\win\bin\cmake.exe" -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\cmake-build-debug"

# Include any dependencies generated for this target.
include CMakeFiles/1_Ejercicio.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/1_Ejercicio.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/1_Ejercicio.dir/flags.make

CMakeFiles/1_Ejercicio.dir/main.cpp.obj: CMakeFiles/1_Ejercicio.dir/flags.make
CMakeFiles/1_Ejercicio.dir/main.cpp.obj: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/1_Ejercicio.dir/main.cpp.obj"
	C:\PROGRA~1\MINGW-~1\X86_64~1.0-P\mingw64\bin\G__~1.EXE  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\1_Ejercicio.dir\main.cpp.obj -c "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\main.cpp"

CMakeFiles/1_Ejercicio.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/1_Ejercicio.dir/main.cpp.i"
	C:\PROGRA~1\MINGW-~1\X86_64~1.0-P\mingw64\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\main.cpp" > CMakeFiles\1_Ejercicio.dir\main.cpp.i

CMakeFiles/1_Ejercicio.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/1_Ejercicio.dir/main.cpp.s"
	C:\PROGRA~1\MINGW-~1\X86_64~1.0-P\mingw64\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\main.cpp" -o CMakeFiles\1_Ejercicio.dir\main.cpp.s

# Object files for target 1_Ejercicio
1_Ejercicio_OBJECTS = \
"CMakeFiles/1_Ejercicio.dir/main.cpp.obj"

# External object files for target 1_Ejercicio
1_Ejercicio_EXTERNAL_OBJECTS =

1_Ejercicio.exe: CMakeFiles/1_Ejercicio.dir/main.cpp.obj
1_Ejercicio.exe: CMakeFiles/1_Ejercicio.dir/build.make
1_Ejercicio.exe: CMakeFiles/1_Ejercicio.dir/linklibs.rsp
1_Ejercicio.exe: CMakeFiles/1_Ejercicio.dir/objects1.rsp
1_Ejercicio.exe: CMakeFiles/1_Ejercicio.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir="C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable 1_Ejercicio.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\1_Ejercicio.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/1_Ejercicio.dir/build: 1_Ejercicio.exe

.PHONY : CMakeFiles/1_Ejercicio.dir/build

CMakeFiles/1_Ejercicio.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\1_Ejercicio.dir\cmake_clean.cmake
.PHONY : CMakeFiles/1_Ejercicio.dir/clean

CMakeFiles/1_Ejercicio.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio" "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio" "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\cmake-build-debug" "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\cmake-build-debug" "C:\Users\alexi\OneDrive\Documentos\fund-tapia-valladares-alexis-dario\Examen 1B\1 Ejercicio\cmake-build-debug\CMakeFiles\1_Ejercicio.dir\DependInfo.cmake" --color=$(COLOR)
.PHONY : CMakeFiles/1_Ejercicio.dir/depend
